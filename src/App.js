import { useEffect, useRef, useState } from "react";
import useScript from "./useScript";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mathML, setMathML] = useState(
    `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <menclose notation="circle box">
          <mi> x </mi><mo> + </mo><mi> y </mi>
        </menclose>
      </math>`
  );
  const ref = useRef();
  useScript(
    "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image"
  );
  const handlerOnChange = (e) => {
    setMathML(e.target.value);
  };
  useEffect(() => {
    window.com.wiris.js.JsPluginViewer.parseElement(
      ref.current,
      true,
      () => {}
    );
  }, [mathML]);
  return (
    <div>
      <h1>Wiris Viewer</h1>
      <textarea
        name="data"
        id=""
        cols="30"
        rows="10"
        value={mathML}
        onChange={handlerOnChange}
      ></textarea>
      <div
        ref={ref}
        data-mathml={mathML}
        dangerouslySetInnerHTML={{ __html: mathML }}
      />
    </div>
  );
};
export default App;
