export const getLanguageIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
        TypeScript: "typescript/typescript-original.svg",
        JavaScript: "javascript/javascript-original.svg",
        HTML: "html5/html5-original.svg",
        CSS: "css3/css3-original.svg",
        Python: "python/python-original.svg",
        Java: "java/java-original.svg",
        "C#": "csharp/csharp-original.svg",
        PHP: "php/php-original.svg",
        Go: "go/go-original.svg",
        Rust: "rust/rust-original.svg",
        React: "react/react-original.svg",
        Vue: "vuejs/vuejs-original.svg",
        Angular: "angularjs/angularjs-original.svg",
        Node: "nodejs/nodejs-original.svg",
        Docker: "docker/docker-original.svg",
        Git: "git/git-original.svg",
        Linux: "linux/linux-original.svg",
        Windows: "windows8/windows8-original.svg",
        Mac: "apple/apple-original.svg",
        Android: "android/android-original.svg",
        Swift: "swift/swift-original.svg",
        Kotlin: "kotlin/kotlin-original.svg",
        Ruby: "ruby/ruby-original.svg",
        Dart: "dart/dart-original.svg",
        Flutter: "flutter/flutter-original.svg",
        MySQL: "mysql/mysql-original.svg",
        PostgreSQL: "postgresql/postgresql-original.svg",
        MongoDB: "mongodb/mongodb-original.svg",
        Redis: "redis/redis-original.svg",
        Nginx: "nginx/nginx-original.svg",
        Apache: "apache/apache-original.svg",
        Bash: "bash/bash-original.svg",
        PowerShell: "powershell/powershell-original.svg",
        JSON: "json/json-original.svg",
        YAML: "yaml/yaml-original.svg",
        Markdown: "markdown/markdown-original.svg",
        Sass: "sass/sass-original.svg",
        Less: "less/less-original-wordmark.svg",
        Tailwind: "tailwindcss/tailwindcss-original.svg",
        Bootstrap: "bootstrap/bootstrap-original.svg",
        GraphQL: "graphql/graphql-plain.svg",
        Next: "nextjs/nextjs-original.svg",
        Nuxt: "nuxtjs/nuxtjs-original.svg",
        Svelte: "svelte/svelte-original.svg",
        Vite: "vitejs/vitejs-original.svg",
        Webpack: "webpack/webpack-original.svg",
        Babel: "babel/babel-original.svg",
        Jest: "jest/jest-plain.svg",
        Mocha: "mocha/mocha-plain.svg",
        Cypress: "cypressio/cypressio-original.svg",
        Selenium: "selenium/selenium-original.svg",
        Puppeteer: "puppeteer/puppeteer-original.svg",
        Electron: "electron/electron-original.svg",
        Figma: "figma/figma-original.svg",
        Sketch: "sketch/sketch-original.svg",
        Photoshop: "photoshop/photoshop-original.svg",
        Illustrator: "illustrator/illustrator-plain.svg",
        Premiere: "premierepro/premierepro-original.svg",
        AfterEffects: "aftereffects/aftereffects-original.svg",
        Unity: "unity/unity-original.svg",
        Unreal: "unrealengine/unrealengine-original.svg",
        Godot: "godot/godot-original.svg",
        Blender: "blender/blender-original.svg",
        Arduino: "arduino/arduino-original.svg",
        RaspberryPi: "raspberrypi/raspberrypi-original.svg",
        Ubuntu: "ubuntu/ubuntu-plain.svg",
        Debian: "debian/debian-plain.svg",
        Fedora: "fedora/fedora-plain.svg",
        CentOS: "centos/centos-plain.svg",
        Arch: "archlinux/archlinux-original.svg",
        Kali: "kalilinux/kalilinux-original.svg",
    };

    const icon =
        iconMap[name] ||
        iconMap[Object.keys(iconMap).find((k) => name.toLowerCase().includes(k.toLowerCase())) || ""];
    return icon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
        : null;
};

export const getEditorIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
        "VS Code": "vscode/vscode-original.svg",
        "Visual Studio Code": "vscode/vscode-original.svg",
        "Visual Studio": "visualstudio/visualstudio-original.svg",
        IntelliJ: "intellij/intellij-original.svg",
        "IntelliJ IDEA": "intellij/intellij-original.svg",
        PyCharm: "pycharm/pycharm-original.svg",
        WebStorm: "webstorm/webstorm-original.svg",
        PhpStorm: "phpstorm/phpstorm-original.svg",
        Vim: "vim/vim-original.svg",
        Neovim: "vim/vim-original.svg",
        Emacs: "emacs/emacs-original.svg",
        Atom: "atom/atom-original.svg",
        Sublime: "sublimetext/sublimetext-original.svg",
        "Sublime Text": "sublimetext/sublimetext-original.svg",
        Xcode: "xcode/xcode-original.svg",
        AndroidStudio: "androidstudio/androidstudio-original.svg",
        "Android Studio": "androidstudio/androidstudio-original.svg",
        Eclipse: "eclipse/eclipse-original.svg",
        NetBeans: "netbeans/netbeans-original.svg",
        Rider: "rider/rider-original.svg",
        Goland: "go/go-original.svg",
        RStudio: "rstudio/rstudio-original.svg",
        Notepad: "notepaddplusplus/notepaddplusplus-original.svg",
        "Notepad++": "notepaddplusplus/notepaddplusplus-original.svg",
        Terminal: "bash/bash-original.svg",
        Fleet: "jetbrains/jetbrains-original.svg",
        Cursor: "vscode/vscode-original.svg",
        Antigravity: "vscode/vscode-original.svg",
    };

    const icon =
        iconMap[name] ||
        iconMap[Object.keys(iconMap).find((k) => name.toLowerCase().includes(k.toLowerCase())) || ""];
    return icon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
        : null;
};

export const getOSIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
        Mac: "apple/apple-original.svg",
        macOS: "apple/apple-original.svg",
        Linux: "linux/linux-original.svg",
        Windows: "windows8/windows8-original.svg",
        Ubuntu: "ubuntu/ubuntu-plain.svg",
        Debian: "debian/debian-plain.svg",
        Fedora: "fedora/fedora-plain.svg",
        CentOS: "centos/centos-plain.svg",
        Arch: "archlinux/archlinux-original.svg",
        Kali: "kalilinux/kalilinux-original.svg",
        Android: "android/android-original.svg",
        iOS: "apple/apple-original.svg",
        Chrome: "chrome/chrome-original.svg",
        WSL: "linux/linux-original.svg",
    };

    const icon =
        iconMap[name] ||
        iconMap[Object.keys(iconMap).find((k) => name.toLowerCase().includes(k.toLowerCase())) || ""];
    return icon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
        : null;
};
