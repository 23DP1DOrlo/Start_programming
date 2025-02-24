const buttons = document.querySelectorAll(".code");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let existingCodeBlock = this.parentElement.querySelector(".example-code");

            if (!existingCodeBlock) {
                let codeBlock = document.createElement("pre");
                let codeContent = document.createElement("code");
                let outputBlock = document.createElement("pre");
                let outputContent = document.createElement("code");

                let language = "";
                let codeText = "";
                let outputText = "Hello, World!";

                if (this.closest("#python")) {
                    language = "python";
                    codeText = `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))`;
                } else if (this.closest("#javascript")) {
                    language = "javascript";
                    codeText = `function greet(name) {\n    return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet("World"));`;
                } else if (this.closest("#cplus")) {
                    language = "cpp";
                    codeText = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`;
                }

                codeBlock.classList.add("example-code");
                codeContent.classList.add(`language-${language}`);
                outputBlock.classList.add("example-code");
                outputContent.classList.add("language-none");

                codeContent.textContent = codeText;
                outputContent.textContent = `Output:\n${outputText}`;

                codeBlock.appendChild(codeContent);
                outputBlock.appendChild(outputContent);
                this.parentElement.appendChild(codeBlock);
                this.parentElement.appendChild(outputBlock);

                Prism.highlightElement(codeContent);
            } else {
                existingCodeBlock.nextElementSibling.remove();
                existingCodeBlock.remove();
            }
        });
    });
