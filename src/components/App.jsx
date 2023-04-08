import { Routes, Route } from 'react-router-dom';
import Logo from './Logo/Logo';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/test" element={"Тэст компонент"} />
      </Routes>
    </>
  );
};
