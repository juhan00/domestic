import styled from "@emotion/styled";

export const RouteWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const SemiHeader = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: top;
  h1 {
    color: #111111;
    font-size: 18px;
    font-weight: 500;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
`;
export const TableWrapper = styled.div`
  margin-left: 20px;
  flex: 1 1 400px;
`;
export const ChartWrapper = styled.div`
  background-color: #ffffff;
  height: 700px;
  border-radius: 12px;
  flex: 3 1 1200px;
`;
export const CorrTableWrapper = styled.div`
  float: left;
  width: 23.913043%;
  height: calc(100vh - 265px);
  border-radius: 0 0 12px 12px;
`;
export const InputWrapper = styled.div`
  height: 30px;
  input[type="date"] {
    background-color: transparent;
    width: 40%;
    height: 100%;
    border: none;
    border-bottom: 1px solid #e5e5ec;
    color: #111111;
    padding-bottom: 5px;
    margin: 0 5px;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    width: 15px;
    padding: 0px;
    margin: 0px;
    color: #767676;
  }
`;
