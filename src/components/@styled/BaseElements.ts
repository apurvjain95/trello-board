import styled from 'styled-components'

export const Flex = styled('div')`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const Flex1Row = styled(FlexRow)`
  flex: 1;
`;

export const Flex1 = styled(Flex)`
  flex: 1;
`;

export const Flex1Column = styled(Flex1)`
  flex-direction: column;
`;