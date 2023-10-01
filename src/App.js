import {HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Dateall from './Component/AttendanceList';
import Datebyid from './Component/DateById';
import Attendancesheet from './Component/AttendanceSheet';
import AttendanceOfA from './Component/AttendanceOfA';
import AttendanceOfB from './Component/AttendanceOfB';
import DateEdit from './Component/DateEdit';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Attendancesheet />} />
            <Route path='/AttendanceList' element={<Dateall />}/>
            <Route path='/AttendanceOfA' element={<AttendanceOfA />} />
            <Route path='/AttendanceOfB' element={<AttendanceOfB />} />
            <Route path='/Datebyid/:id' element={<Datebyid />}/>
            <Route path='/DateEdit/:id' element={<DateEdit />}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
};

export default App;
