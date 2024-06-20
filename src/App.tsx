import styled from "styled-components";
import TooltipPortalContainer from "./components/Tooltip/TooltipPortalContainer";

const App = () => {
  return (
    <AppContainer>
      <TooltipPortalContainer message="hi" className="home">
        <AppContent>Hello</AppContent>
      </TooltipPortalContainer>
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  text-align: center;
  margin-top: 300px;
`;

const AppContent = styled.span``;
