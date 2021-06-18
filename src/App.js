import { Paper, IconButton, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import {
  IoCloudDownloadSharp,
  IoTerminalOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoPlayCircleOutline,
} from "react-icons/io5";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds";
const App = () => {
  const [darkmode, setdarkmode] = useState(false);
  const [html, sethtml] = useState("");
  const [htmlsrc, sethtmlsrc] = useState("");
  const [theme, setTheme] = useState("github");

  function handleDarkmode() {
    setdarkmode(!darkmode);
  }
  function onhtmlChange(newValue) {
    sethtml(newValue);
  }

  function onThemeChange() {
    const x = darkmode ? "monokai" : "github";
    setTheme(x);
  }

  function download() {
    if (html) {
      const element = document.createElement("a");
      const file = new Blob([htmlsrc], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "index.txt";
      element.click();
    } else {
      alert("write something to download");
    }
  }

  function runCode() {
    sethtmlsrc(`
    <html>
      ${html}
    </html>`);
  }

  useEffect(() => {
    onThemeChange();
  }, [darkmode]);
  return (
    <div className="app">
      <div className="editor_container">
        <Paper className="editor">
          <div
            className={
              darkmode
                ? "editor_top editor_top_dark"
                : "editor_top editor_top_light"
            }
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <span style={{ margin: "0px 2px" }}>
                <IoTerminalOutline className="icon_btn" />
              </span>
              <h5 style={{ margin: "0px 2px" }}>Html</h5>
            </div>
            <div className="icons">
              <IconButton onClick={runCode}>
                <IoPlayCircleOutline className="icon_btn" />
              </IconButton>

              <IconButton onClick={download}>
                <IoCloudDownloadSharp className="icon_btn" />
              </IconButton>

              <IconButton onClick={handleDarkmode}>
                {darkmode ? (
                  <IoSunnyOutline className="icon_btn" />
                ) : (
                  <IoMoonOutline className="icon_btn" />
                )}
              </IconButton>
            </div>
          </div>
          <AceEditor
            style={{
              width: "100%",
              minHeight: "100vh",
            }}
            mode="html"
            theme={theme}
            fontSize={14}
            onChange={onhtmlChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Paper>
      </div>
      <div
        className={
          darkmode
            ? "iframe_container iframe_container_dark"
            : "iframe_container iframe_container_light"
        }
      >
        <div
          className={
            darkmode
              ? "iframe_top iframe_top_dark"
              : "iframe_top iframe_top_light"
          }
        >
          <h5>output</h5>
        </div>
        <iframe title="output" srcDoc={htmlsrc} />
      </div>
    </div>
  );
};

export default App;
