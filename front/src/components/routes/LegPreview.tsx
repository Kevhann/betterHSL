import * as React from 'react';
import { formatDistance, formatTime } from '../../functions/formatter';
import { Icon, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';
import { colorMap, Colors, Leg } from '../../types/route';
import { ToolTip } from '../ui/ToolTip';

type Props = { leg: Leg };

type PillProps = {
  color: Colors;
};
const Pill = styled.div`
  border-radius: 4px;
  background-color: ${(props: PillProps) => props.color};
  width: fit-content;
  padding: 2px;
`;

const LegSegmentPreview = styled.span`
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  ${'' /* maxwidth: ${(props) => props.maxWidth * 2}; */}
`;

// LegSegmentPreview.defaultProps = {
//   maxwidth,
// };

const LegPreviewContainer = styled.span`
  position: relative;
  display: flexbox;
  width: 100%;
  flex-wrap: wrap;
  flex-grow: 2;
  ${'' /* left: 8%; */}
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LegInfoContainer = styled.span`
  position: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  left: 0%;
  align-items: left;
  justify-content: space-between;
  z-index: 10;
`;

const BarContainer = styled.span`
  ${'' /* position: absolute; */}
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Bar = styled.span`
  width: 100%;
  background-color: ${props => props.color};

  height: 7px;
  z-index: 0;
  border-radius: 3px;
`;

export const LegPreview = (props: Props) => {
  const { leg } = props;
  const startTime = formatTime(leg.startTime);
  const distance = formatDistance(leg.distance);

  const color = colorMap[leg.mode];

  return (
    <ToolTip
      toolTip={() => (
        <>
          Leaves: {startTime}
          <br />
          Distance: {distance}
        </>
      )}
    >
      <Pill color={color}>Howdy</Pill>
    </ToolTip>
  );
};

// export const LegPreviewSegment = (props: Props) => {
//   const { leg } = props;
//   let color = 'purple';
//   let icon: SemanticICONS = 'train';
//   const legDepartureTime = formatTime(leg.startTime);

//   if (leg.mode === 'SUBWAY') {
//     color = 'orange';
//     icon = 'subway';
//   }
//   if (leg.mode === 'BUS') {
//     color = 'blue';
//     icon = 'bus';
//   }
//   if (leg.mode === 'WALK') {
//     color = 'lightblue';
//     icon = 'blind';
//   }

//   Bar.defaultProps = {
//     color
//   };

//   return (
//     <LegPreviewContainer>
//       <LegInfoContainer>
//         {leg.mode === 'WALK' ? null : (
//           <LegSegmentPreview key={leg.from.name}>{leg.from.stop?.name}</LegSegmentPreview>
//         )}
//         <div>
//           <Icon name={icon} />
//           {leg.trip?.route.shortName}
//         </div>
//         {legDepartureTime}
//       </LegInfoContainer>

//       <BarContainer>
//         <Bar color={color} />
//       </BarContainer>
//     </LegPreviewContainer>
//   );
// };
