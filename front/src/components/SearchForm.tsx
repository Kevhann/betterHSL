import * as React from 'react';
import { useApolloClient } from 'react-apollo-hooks';
import Routes from './routes/Routes';
import { AutocompleteSearchForm } from './AutocompleteSearchForm';
import { Segment, Form, Button, Icon, Loader, Input } from 'semantic-ui-react';
import { connect, ConnectedProps } from 'react-redux';
import { setRoutes } from '../reducers/routeReducer';
import { setBackgroundLocation } from '../reducers/backgroundMapReducer';
import { setMapClass } from '../reducers/mapClassReducer';
import { setFormClass } from '../reducers/formClassReducer';
import { formatTime, getCurrentDate } from '../functions/formatter';
import planRoute from '../apis/planRoute';
import geocoding from '../apis/geocoding';
import { RootState } from '../store';
import { TimeOption } from '../types/route';

// why do these props turn into true?
// Copypasting this below works
// const TimeSelectors = ({ planDate, setPlanDate, planTime, setPlanTime }) => {
//   console.log("planTime:", planTime);
//   console.log("setPlanTime:", setPlanTime);
//   return (
//     <React.Fragment>
//       <Form.Field>
//         <Input
//           defaultValue={planTime}
//           type="time"
//           onChange={(event) => setPlanTime(event.target.value)}
//         />
//       </Form.Field>
//       <Form.Field>
//         <Input
//           type="date"
//           style={{ maxWidth: "163px" }}
//           value={planDate}
//           onChange={(event) => setPlanDate(event.target.value)}
//         />
//       </Form.Field>
//     </React.Fragment>
//   );
// };

type Props = ConnectedProps<typeof connector>;
type TimeSelectOption = {
  key: number;
  value: TimeOption;
  text: string;
};
const timeSelectOptions: TimeSelectOption[] = [
  { key: 1, value: 'NOW', text: 'Now' },
  { key: 2, value: 'LEAVE_AT', text: 'Leave at' },
  { key: 3, value: 'ARRIVE_BY', text: 'Arrive by' }
];

const SearchForm = ({
  setRoutes,
  setBackgroundLocation,
  setMapClass,
  classState,
  setFormClass
}: Props) => {
  const [from, setFrom] = React.useState(
    process.env.NODE_ENV === 'production' ? '' : 'berliininkatu'
  );
  const [to, setTo] = React.useState(process.env.NODE_ENV === 'production' ? '' : 'leppävaara');
  const [loading, setLoading] = React.useState(false);
  const [planTime, setPlanTime] = React.useState('');
  const [planDate, setPlanDate] = React.useState('');
  const [timeMethod, setTimeMethod] = React.useState<TimeOption>('NOW');

  const setCurrentTimeAndDate = () => {
    setPlanTime(formatTime(Date.now()));
    setPlanDate(getCurrentDate());
  };

  const client = useApolloClient();
  React.useEffect(() => {
    setCurrentTimeAndDate();
  }, []);

  const submit = async (event: any) => {
    event.preventDefault();
    setRoutes([]);
    if (from !== '' && to !== '') {
      setLoading(true);
      setFormClass('resultsForm');

      const [coordinatesFrom, coordinatesTo] = await Promise.all([geocoding(from), geocoding(to)]);

      setBackgroundLocation([
        [coordinatesFrom[1], coordinatesFrom[0]],
        [coordinatesTo[1], coordinatesTo[0]]
      ]);
      setMapClass('resultsMap');

      const plannedRoute = await client.query({
        query: planRoute,
        variables: {
          latFrom: coordinatesFrom[1],
          lonFrom: coordinatesFrom[0],
          latTo: coordinatesTo[1],
          lonTo: coordinatesTo[0],
          time: `${planTime}:00`,
          date: planDate,
          arriveBy: timeMethod === 'ARRIVE_BY'
        }
      });
      const newRoutes = plannedRoute.data.planRoute;
      setLoading(false);
      setRoutes(newRoutes);
    }
  };

  return (
    <div className={classState}>
      <Segment raised style={{ marginBottom: 0 }}>
        <Form onSubmit={submit}>
          <Form.Field>
            <AutocompleteSearchForm inputValue={from} setInputValue={setFrom} fieldName="from" />
          </Form.Field>
          <Form.Field>
            <AutocompleteSearchForm inputValue={to} setInputValue={setTo} fieldName="to" />
          </Form.Field>

          <Form.Group inline>
            <Form.Select
              defaultValue={'NOW'}
              selection
              fluid
              options={timeSelectOptions}
              clearable={false}
              onChange={(event, value) => {
                const method = value.value as TimeOption;
                setTimeMethod(method);
                console.log('method:', method);
                if (method === 'NOW') {
                  setCurrentTimeAndDate();
                }
              }}
            />

            {timeMethod !== 'NOW' ? (
              <React.Fragment>
                <Form.Field>
                  <Input
                    defaultValue={planTime}
                    type="time"
                    onChange={event => setPlanTime(event.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    type="date"
                    style={{ maxWidth: '163px' }}
                    value={planDate}
                    onChange={event => setPlanDate(event.target.value)}
                  />
                </Form.Field>
              </React.Fragment>
            ) : null}
          </Form.Group>
          <Form.Field>
            <Button animated primary type="submit">
              <Button.Content visible>Search</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </Segment>
      <Routes />
      <Loader inline="centered" active={loading} style={{ marginTop: '10px' }} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    latlng: state.backgroundMap,
    classState: state.formClass,
    routes: state.route,
    activeTrail: state.trail,
    mapClass: state.mapClass
  };
};
const mapDispatchToProps = {
  setRoutes,
  setBackgroundLocation,
  setMapClass,
  setFormClass
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SearchForm);
