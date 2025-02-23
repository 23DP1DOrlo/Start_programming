document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".code");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let existingCodeBlock = this.parentElement.querySelector(".example-code");

            if (!existingCodeBlock) {
                // Создаём <pre> и <code> блоки
                let codeBlock = document.createElement("pre");
                let codeContent = document.createElement("code");
                let outputBlock = document.createElement("pre"); // Для вывода
                let outputContent = document.createElement("code");

                // Определяем язык программирования
                let language, codeText, outputText;
                if (this.closest("#python")) {
                    language = "python";
                    codeText = `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))`;
                    outputText = "Hello, World!";
                } else if (this.closest("#javascript")) {
                    language = "javascript";
                    codeText = `function greet(name) {\n    return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet("World"));`;
                    outputText = "Hello, World!";
                } else if (this.closest("#cplus")) {
                    language = "cpp";
                    codeText = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`;
                    outputText = "Hello, World!";
                }

                // Добавляем классы Prism.js
                codeBlock.classList.add("example-code");
                codeContent.classList.add(`language-${language}`);
                outputBlock.classList.add("example-code");
                outputContent.classList.add("language-none"); // Без подсветки

                // Заполняем кодом
                codeContent.textContent = codeText;
                outputContent.textContent = `Output:\n${outputText}`;

                // Вставляем элементы
                codeBlock.appendChild(codeContent);
                outputBlock.appendChild(outputContent);
                this.parentElement.appendChild(codeBlock);
                this.parentElement.appendChild(outputBlock);

                // Подсветка синтаксиса
                Prism.highlightElement(codeContent);
            } else {
                // Если уже есть, скрываем
                existingCodeBlock.nextElementSibling.remove(); // Удаляем output
                existingCodeBlock.remove();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        console.log("Form Submitted!");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Phone:", phone);
        console.log("Email:", email);

        alert("Your request has been submitted! We will contact you soon.");
        contactForm.reset();
    });
});