
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamePageComponent from './components/GamePageComponent';

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import SayHelloComponent from './components/SayHelloComponents';
import AddingTwoNumbersComponent from './components/AddingTwoNumbersComponents';
import AskingQuestionsComponent from './components/AskingQuestionsComponents';
import GreaterThanOrLessThanComponent from './components/GreaterThanOrLessThanComponents';
import MadLibComponent from './components/MadLibComponents';
import OddOrEvenComponent from './components/OddOrEvenComponents';
import ReverseItComponent from './components/ReverseItComponents';
import StudentDirectoryComponent from './components/StudentDirectoryComponents';
import RestaurantPickerComponent from './components/RestaurantPickerComponents';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePageComponent/>}></Route>
        <Route path="SayHelloComponent" element={<SayHelloComponent/>}></Route>
        <Route path="AddingTwoNumbersComponents" element={<AddingTwoNumbersComponent/>}></Route>
        <Route path="AskingQuestionsComponent" element={<AskingQuestionsComponent/>}></Route>
        <Route path="GreaterThanOrLessThanComponent" element={<GreaterThanOrLessThanComponent/>}></Route>
        <Route path="MadLibComponent" element={<MadLibComponent/>}></Route>
        <Route path="OddOrEvenComponent" element={<OddOrEvenComponent/>}></Route>
        <Route path="ReverseItComponent" element={<ReverseItComponent/>}></Route>
        <Route path="StudentDirectoryComponent" element={<StudentDirectoryComponent/>}></Route>
        <Route path="RestaurantPickerComponent" element={<RestaurantPickerComponent/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
