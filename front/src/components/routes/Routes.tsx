import * as React from 'react';
import { Leg } from './ExpandedLeg';
import { Accordion, AccordionTitleProps } from 'semantic-ui-react';
import { setActiveTrail } from '../../reducers/trailReducer';
import { connect, ConnectedProps } from 'react-redux';
import { RoutePreview } from './RoutePreview';
import { RootState } from '../../store';

type Props = ConnectedProps<typeof connector>;

const Routes = ({ setActiveTrail, routes }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  let itineraryid = -1;

  const handleClick = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    titleProps: AccordionTitleProps
  ) => {
    const index = typeof titleProps.index === 'number' ? titleProps.index : -1;
    const isActive = activeIndex === index ? -1 : index;
    if (isActive >= 0) {
      setActiveTrail(isActive);
    }
    setActiveIndex(isActive);
  };

  if (routes.length === 0) return <></>;

  return (
    <>
      <Accordion fluid styled>
        {routes.map(route => {
          itineraryid++;
          return (
            <>
              <Accordion.Title
                onClick={handleClick}
                index={itineraryid}
                active={activeIndex === itineraryid}
              >
                <span key={route.walkDistance}>
                  <RoutePreview route={route} />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === itineraryid}>
                <span className="timeline">
                  {route.legs.map(leg => (
                    <div key={leg.distance}>
                      <Leg leg={leg} />
                    </div>
                  ))}
                </span>
              </Accordion.Content>
            </>
          );
        })}
      </Accordion>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    routes: state.route
  };
};

const mapDispatchToProps = {
  setActiveTrail
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Routes);
