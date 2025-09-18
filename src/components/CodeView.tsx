import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeViewProps {
  code: string;
  language: string;
}
function CodeView({ code, language }: CodeViewProps){
    return(
        <>
            <div>
                <SyntaxHighlighter language={language} style={tomorrow} showLineNumbers className="code_view" >
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default React.memo (CodeView)