
import React from "react";
import {HashRouter,Route,Routes} from 'react-router-dom'
import AllQuestions from "./components/AllQuestions";
import AllTests from "./components/AllTests";
import GeneralTest from "./components/GeneralTest";
import Result from "./components/Result";
import Signin from "./components/SIgnin";
import GeneralResult from './components/GeneralResult'



export default function App() {
  return (
    <div className="bg" >
      <section >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: ' 1rem' }}>
                <div className="card-body p-5 text-center">
                  <HashRouter>
                    <Routes>
                      <Route path="/sv" element={<Signin />}/>
                      <Route path="/sv/choose" element={<AllTests />}/>
                      <Route path="/sv/questions" element={<AllQuestions />}/>
                      <Route path="/sv/generaltest" element={<GeneralTest />}/>
                      <Route path="/sv/result" element={<Result />}/>
                      <Route path="/sv/generalresult" element={<GeneralResult/>}/>
                    </Routes>
                  </HashRouter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


