import {useRouteContext} from 'react-router-dom';
function Outlet() {
    // Get the outlet from the current `RouteContext`
    const { outlet } = useRouteContext();
  
    return outlet;
  }
  export default Outlet;