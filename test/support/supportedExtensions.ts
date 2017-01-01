/* tslint:disable max-line-length */
import { languages } from '../../src/icon-manifest/languages';
import { IExtensionCollection, IFileExtension, FileFormat } from '../../src/models/IExtension';

export const extensions: IExtensionCollection<IFileExtension> = {
  supported: [
    { icon: 'actionscript', extensions: ['as'], format: FileFormat.svg },
    { icon: 'ai', extensions: ['ai'], format: FileFormat.svg },
    { icon: 'angular', extensions: ['angular-cli.json'], filename: true, format: FileFormat.svg },
    { icon: 'ng2_component_ts', extensions: ['component.ts'], format: FileFormat.svg },
    { icon: 'ng2_component_js', extensions: ['component.js'], format: FileFormat.svg },
    { icon: 'ng2_directive_ts', extensions: ['directive.ts'], format: FileFormat.svg },
    { icon: 'ng2_directive_js', extensions: ['directive.js'], format: FileFormat.svg },
    { icon: 'ng2_pipe_ts', extensions: ['pipe.ts'], format: FileFormat.svg },
    { icon: 'ng2_pipe_js', extensions: ['pipe.js'], format: FileFormat.svg },
    { icon: 'ng2_service_ts', extensions: ['service.ts'], format: FileFormat.svg },
    { icon: 'ng2_service_js', extensions: ['service.js'], format: FileFormat.svg },
    { icon: 'ng2_module_ts', extensions: ['module.ts'], format: FileFormat.svg },
    { icon: 'ng2_module_js', extensions: ['module.js'], format: FileFormat.svg },
    { icon: 'ng2_routing_ts', extensions: ['routing.ts'], format: FileFormat.svg },
    { icon: 'ng2_routing_js', extensions: ['routing.js'], format: FileFormat.svg },
    { icon: 'ng2_routing_ts', extensions: ['app-routing.module.ts'], filename: true, format: FileFormat.svg },
    { icon: 'ng2_routing_js', extensions: ['app-routing.module.js'], filename: true, format: FileFormat.svg },
    { icon: 'apache', extensions: ['.htaccess', '.htpasswd'], filename: true, format: FileFormat.svg },
    { icon: 'apib', extensions: ['apib'], format: FileFormat.svg },
    { icon: 'applescript', extensions: ['app'], format: FileFormat.svg },
    { icon: 'appveyor', extensions: ['appveyor.yml', '.appveyor.yml'], filename: true, format: FileFormat.png },
    { icon: 'ansible', extensions: ['ansible'], format: FileFormat.svg },
    { icon: 'asp', extensions: ['asp'], format: FileFormat.png },
    { icon: 'aspx', extensions: ['aspx', 'ascx'], format: FileFormat.png },
    { icon: 'assembly', extensions: ['s', 'asm'], format: FileFormat.png },
    { icon: 'autohotkey', extensions: ['ahk'], format: FileFormat.png },
    { icon: 'babel', extensions: ['.babelrc'], filename: true, format: FileFormat.svg },
    { icon: 'bat', extensions: [], languages: [languages.bat], format: FileFormat.png },
    { icon: 'binary', extensions: ['bin', 'o', 'a', 'exe', 'obj', 'lib', 'dll', 'so', 'pyc', 'pyd', 'pyo', 'n', 'ndll', 'pdb', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi'], format: FileFormat.png }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: 'blade', extensions: ['blade.php'], format: FileFormat.svg },
    { icon: 'bower', extensions: ['.bowerrc', 'bower.json'], filename: true, format: FileFormat.svg },
    { icon: 'buckbuild', extensions: ['.buckconfig'], filename: true, format: FileFormat.svg },
    { icon: 'bundler', extensions: ['gemfile', 'gemfile.lock'], filename: true, format: FileFormat.png },
    { icon: 'c', extensions: [], languages: [languages.c], format: FileFormat.png },
    { icon: 'cake', extensions: ['cake'], format: FileFormat.png },
    { icon: 'cfm', extensions: ['cfm', 'cfc', 'lucee'], format: FileFormat.png },
    { icon: 'cheader', extensions: ['h'], format: FileFormat.png },
    { icon: 'class', extensions: ['class'], format: FileFormat.svg },
    { icon: 'clojure', extensions: ['cjm', 'cljc'], languages: [languages.clojure], format: FileFormat.png },
    { icon: 'cmake', extensions: ['CMakeCache.txt', 'CMakeLists.txt', '.cmake'], filename: true, format: FileFormat.svg },
    { icon: 'cobol', extensions: ['cbl', 'cob', 'cpy'], format: FileFormat.png },
    { icon: 'codeclimate', extensions: ['codeclimate.yml'], filename: true, format: FileFormat.png },
    { icon: 'coffeescript', extensions: [], languages: [languages.coffeescript], format: FileFormat.png },
    { icon: 'config', extensions: ['env', 'config'], languages: [languages.properties], format: FileFormat.png },
    { icon: 'config', extensions: ['.env.example'], filename: true, format: FileFormat.png },
    { icon: 'compass', extensions: [], format: FileFormat.png },
    { icon: 'composer', extensions: ['composer.json', 'composer.lock'], filename: true, format: FileFormat.png },
    { icon: 'cpp', extensions: [], languages: [languages.cpp], format: FileFormat.png },
    { icon: 'crystal', extensions: [], languages: [languages.crystal], format: FileFormat.svg },
    { icon: 'csharp', extensions: ['csx'], languages: [languages.csharp], format: FileFormat.png },
    { icon: 'cshtml', extensions: [], languages: [languages.razor], format: FileFormat.png },
    { icon: 'csproj', extensions: ['csproj'], format: FileFormat.png },
    { icon: 'css', extensions: [], languages: [languages.css], format: FileFormat.svg },
    { icon: 'csslint', extensions: ['.csslintrc'], filename: true, format: FileFormat.png },
    { icon: 'cssmap', extensions: ['css.map'], format: FileFormat.png },
    { icon: 'cucumber', extensions: ['feature'], format: FileFormat.png },
    { icon: 'dartlang', extensions: ['dart'], format: FileFormat.png },
    { icon: 'delphi', extensions: ['pas', 'dfm', 'dpr'], format: FileFormat.png },
    { icon: 'dlang', extensions: ['d'], format: FileFormat.png },
    { icon: 'diff', extensions: [], languages: [languages.diff], format: FileFormat.svg },
    { icon: 'docker', extensions: ['.dockerignore', 'docker-compose.yml'], filename: true, languages: [languages.dockerfile], format: FileFormat.png },
    { icon: 'editorconfig', extensions: ['.editorconfig'], filename: true, format: FileFormat.png },
    { icon: 'ejs', extensions: ['ejs'], format: FileFormat.png },
    { icon: 'elixir', extensions: ['ex', 'exs', 'eex'], format: FileFormat.png },
    { icon: 'elm', extensions: ['elm'], format: FileFormat.png },
    { icon: 'elm', extensions: ['elm-package.json'], filename: true, format: FileFormat.png },
    { icon: 'emacs', extensions: ['el', 'elc'], format: FileFormat.svg },
    { icon: 'ember', extensions: ['.ember-cli'], filename: true, format: FileFormat.svg },
    { icon: 'erb', extensions: ['rhtml', 'erb'], format: FileFormat.png },
    { icon: 'erlang', extensions: ['erl', 'hrl'], format: FileFormat.png },
    { icon: 'erlang', extensions: ['emakefile', '.emakerfile'], filename: true, format: FileFormat.png },
    { icon: 'eslint', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: FileFormat.png },
    { icon: 'excel', extensions: ['xls', 'xlsx', 'csv', 'ods'], format: FileFormat.png },
    { icon: 'favicon', extensions: ['favicon.ico'], filename: true, format: FileFormat.png },
    { icon: 'flash', extensions: ['swf', 'swc', 'sol'], format: FileFormat.png },
    { icon: 'flow', extensions: ['js.flow'], format: FileFormat.png },
    { icon: 'flow', extensions: ['.flowconfig'], filename: true, format: FileFormat.png },
    { icon: 'fsharp', extensions: [], languages: [languages.fsharp], format: FileFormat.png },
    { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'], format: FileFormat.png },
    { icon: 'fortran', extensions: ['f90', 'mod', 'f'], format: FileFormat.png },
    { icon: 'git', extensions: ['.gitattributes', '.gitconfig', '.gitignore', '.gitmodules', '.gitkeep'], filename: true, languages: [languages.git], format: FileFormat.svg },
    { icon: 'gitlab', extensions: ['.gitlab-ci.yml'], filename: true, format: FileFormat.png },
    { icon: 'go', extensions: [], languages: [languages.go], format: FileFormat.png },
    { icon: 'gradle', extensions: ['gradle'], format: FileFormat.png },
    { icon: 'graphql', extensions: ['gql', 'graphql'], format: FileFormat.svg },
    { icon: 'graphviz', extensions: [], format: FileFormat.png },
    { icon: 'groovy', extensions: [], languages: [languages.groovy], format: FileFormat.png },
    { icon: 'gruntfile', extensions: ['gruntfile.js'], filename: true, format: FileFormat.png },
    { icon: 'gulpfile', extensions: ['gulpfile.js'], filename: true, format: FileFormat.svg },
    { icon: 'haml', extensions: ['haml'], format: FileFormat.png },
    { icon: 'handlebars', extensions: [], languages: [languages.handlebars], format: FileFormat.png },
    { icon: 'haskell', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'], format: FileFormat.png },
    { icon: 'haxe', extensions: ['hx', 'hxml'], format: FileFormat.png },
    { icon: 'haxe', extensions: ['haxelib.json'], filename: true, format: FileFormat.png },
    { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], filename: true, format: FileFormat.png },
    { icon: 'haxedevelop', extensions: ['hxproj'], format: FileFormat.png },
    { icon: 'html', extensions: [], languages: [languages.html], format: FileFormat.svg },
    { icon: 'idris', extensions: ['idr', 'lidr', 'ibc'], format: FileFormat.svg },
    { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'ico'], format: FileFormat.png },
    { icon: 'ini', extensions: [], languages: [languages.ini], format: FileFormat.png },
    { icon: 'ionic', extensions: ['ionic.project'], filename: true, format: FileFormat.png },
    { icon: 'ionic', extensions: ['ionic.config.json'], filename: true, format: FileFormat.png },
    { icon: 'jade', extensions: [], languages: [languages.pug], format: FileFormat.png },
    { icon: 'jade', extensions: ['.jade-lintrc', '.pug-lintrc', '.jade-lint.json', '.pug-lintrc.js', '.pug-lintrc.json'], filename: true, format: FileFormat.png },
    { icon: 'jar', extensions: ['jar'], format: FileFormat.svg },
    { icon: 'java', extensions: [], languages: [languages.java], format: FileFormat.svg },
    { icon: 'jbuilder', extensions: ['jbuilder'], format: FileFormat.svg },
    { icon: 'jest', extensions: ['jest.config.json'], filename: true, format: FileFormat.svg },
    { icon: 'jinja', extensions: ['jinja', 'jinja2'], format: FileFormat.svg },
    { icon: 'js', extensions: [], languages: [languages.javascript], format: FileFormat.svg },
    { icon: 'js_official', extensions: [], languages: [languages.javascript], format: FileFormat.svg, disabled: true },
    { icon: 'jshintrc', extensions: ['.jshintrc'], filename: true, format: FileFormat.png },
    { icon: 'jsmap', extensions: ['js.map'], format: FileFormat.png },
    { icon: 'json', extensions: [], languages: [languages.json], format: FileFormat.png },
    { icon: 'jsp', extensions: ['jsp'], format: FileFormat.png },
    { icon: 'julia', extensions: ['jl'], format: FileFormat.png },
    { icon: 'karma', extensions: ['karma.conf.js', 'karma.conf.coffee'], filename: true, format: FileFormat.svg },
    { icon: 'kotlin', extensions: ['kt'], format: FileFormat.svg },
    { icon: 'lerna', extensions: ['lerna.json'], filename: true, format: FileFormat.png },
    { icon: 'less', extensions: [], languages: [languages.less], format: FileFormat.png },
    { icon: 'license', extensions: ['enc'], format: FileFormat.png },
    { icon: 'license', extensions: ['license', 'licence', 'license.md', 'licence.md'], filename: true, format: FileFormat.png },
    { icon: 'lisp', extensions: ['bil'], format: FileFormat.png},
    { icon: 'lime', extensions: ['hxp'], format: FileFormat.png },
    { icon: 'lime', extensions: ['include.xml'], filename: true, format: FileFormat.png },
    { icon: 'log', extensions: ['log'], format: FileFormat.png },
    { icon: 'lsl', extensions: ['lsl'], format: FileFormat.png },
    { icon: 'lua', extensions: [], languages: [languages.lua], format: FileFormat.png },
    { icon: 'm', extensions: [], languages: [languages.objectivec], format: FileFormat.png },
    { icon: 'makefile', extensions: ['makefile'], format: FileFormat.png },
    { icon: 'makefile', extensions: [], languages: [languages.makefile], format: FileFormat.png },
    { icon: 'markdown', extensions: ['mdown', 'markdown'], languages: [languages.markdown], format: FileFormat.svg },
    { icon: 'marko', extensions: ['marko'], format: FileFormat.png },
    { icon: 'markojs', extensions: ['marko.js'], format: FileFormat.png },
    { icon: 'markup', extensions: [], format: FileFormat.png },
    { icon: 'matlab', extensions: ['fig', 'mat', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc', 'xvc'], format: FileFormat.png },
    { icon: 'masterpage', extensions: ['master'], format: FileFormat.png },
    { icon: 'mustache', extensions: ['mustache', 'mst'], format: FileFormat.png },
    { icon: 'nim', extensions: ['nim', 'nims'], format: FileFormat.png },
    { icon: 'node', extensions: ['.nvmrc'], filename: true, format: FileFormat.svg },
    { icon: 'npm', extensions: ['.npmignore', '.npmrc', 'package.json'], filename: true, format: FileFormat.svg },
    { icon: 'nsi', extensions: ['nsi', 'nsh'], format: FileFormat.svg },
    { icon: 'nuget', extensions: ['nupkg', 'nuspec', 'psmdcp'], format: FileFormat.png },
    { icon: 'nunjucks', extensions: ['njk', 'nunjucks', 'nunjs', 'nunj', 'njs', 'nj'], format: FileFormat.png },
    { icon: 'ocaml', extensions: ['ml', 'mll', 'mli', 'mly', 'ocamlmakefile', 'merlin'], format: FileFormat.png },
    { icon: 'paket', extensions: ['paket.dependencies', 'paket.lock', 'paket.references', 'paket.template', 'paket.local'], filename: true, format: FileFormat.png },
    { icon: 'patch', extensions: ['patch'], format: FileFormat.png },
    { icon: 'pdf', extensions: ['pdf'], format: FileFormat.svg },
    { icon: 'perl', extensions: [], languages: [languages.perl], format: FileFormat.png },
    { icon: 'photoshop', extensions: ['psd'], format: FileFormat.png },
    { icon: 'php', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages.php], format: FileFormat.png },
    { icon: 'phpunit', extensions: ['phpunit.xml'], filename: true, format: FileFormat.png },
    { icon: 'plantuml', extensions: ['pu', 'plantuml', 'iuml', 'puml'], format: FileFormat.png },
    { icon: 'poedit', extensions: ['po', 'mo'], format: FileFormat.png },
    { icon: 'polymer', extensions: [], languages: [languages.polymer], format: FileFormat.svg },
    { icon: 'postcss', extensions: [], languages: [languages.postcss], format: FileFormat.svg },
    { icon: 'powershell', extensions: [], languages: [languages.powershell], format: FileFormat.png },
    { icon: 'procfile', extensions: ['procfile'], filename: true, format: FileFormat.png },
    { icon: 'prolog', extensions: ['pro', 'P'], languages: [languages.prolog], format: FileFormat.png },
    { icon: 'protobuf', extensions: ['proto'], format: FileFormat.png },
    { icon: 'protractor', extensions: ['protractor.conf.js'], filename: true, format: FileFormat.png },
    { icon: 'puppet', extensions: ['epp', 'pp'], format: FileFormat.png },
    { icon: 'purescript', extensions: ['purs'], light: true, format: FileFormat.svg },
    { icon: 'python', extensions: [], languages: [languages.python], format: FileFormat.svg },
    { icon: 'qlikview', extensions: ['qvd', 'qvw'], format: FileFormat.png },
    { icon: 'r', extensions: [], languages: [languages.r], format: FileFormat.png },
    { icon: 'rails', extensions: [], format: FileFormat.png },
    { icon: 'rake', extensions: ['rake'], format: FileFormat.svg },
    { icon: 'rake', extensions: ['rakefile'], filename: true, format: FileFormat.svg },
    { icon: 'raml', extensions: ['raml'], format: FileFormat.png },
    { icon: 'reactjs', extensions: [], languages: [languages.javascriptreact], format: FileFormat.png },
    { icon: 'reacttemplate', extensions: ['rt'], format: FileFormat.png },
    { icon: 'reactts', extensions: ['tsx'], format: FileFormat.png },
    { icon: 'rest', extensions: [], languages: [languages.restructuredtext], format: FileFormat.png },
    { icon: 'riot', extensions: ['tag'], format: FileFormat.png },
    { icon: 'robotframework', extensions: ['robot'], format: FileFormat.png },
    { icon: 'rollup', extensions: ['rollup.config.js'], filename: true, format: FileFormat.png },
    { icon: 'rspec', extensions: ['.rspec'], filename: true, format: FileFormat.png },
    { icon: 'ruby', extensions: [], languages: [languages.ruby], format: FileFormat.svg },
    { icon: 'rust', extensions: [], languages: [languages.rust], format: FileFormat.png },
    { icon: 'saltstack', extensions: ['sls'], format: FileFormat.svg },
    { icon: 'sass', extensions: ['sass'], format: FileFormat.svg },
    { icon: 'scala', extensions: ['scala'], format: FileFormat.png },
    { icon: 'scss', extensions: [], languages: [languages.scss], format: FileFormat.svg },
    { icon: 'settings', extensions: [], format: FileFormat.png },
    { icon: 'shell', extensions: ['fish'], languages: [languages.shellscript], format: FileFormat.png },
    { icon: 'slim', extensions: [], format: FileFormat.png },
    { icon: 'sln', extensions: ['sln'], format: FileFormat.png },
    { icon: 'smarty', extensions: ['tpl', 'swig'], format: FileFormat.png },
    { icon: 'snyk', extensions: ['.snyk'], filename: true, format: FileFormat.svg },
    { icon: 'source', extensions: [], format: FileFormat.png },
    { icon: 'sql', extensions: [], languages: [languages.sql], format: FileFormat.png },
    { icon: 'sqlite', extensions: ['sqlite', 'sqlite3', 'db3'], format: FileFormat.png },
    { icon: 'sss', extensions: ['sss'], format: FileFormat.svg },
    { icon: 'stylelint', extensions: ['.stylelintrc', 'stylelint.config.js'], filename: true, format: FileFormat.png },
    { icon: 'stylus', extensions: ['styl'], format: FileFormat.png },
    { icon: 'storyboard', extensions: ['storyboard'], format: FileFormat.png },
    { icon: 'svg', extensions: ['svg'], format: FileFormat.png },
    { icon: 'swift', extensions: [], languages: [languages.swift], format: FileFormat.png },
    { icon: 'swift', extensions: ['Package.pins'], filename: true, format: FileFormat.png },
    { icon: 'tcl', extensions: ['tcl', 'exp'], format: FileFormat.png },
    { icon: 'terraform', extensions: ['tf', 'terra'], format: FileFormat.png },
    { icon: 'testjs', extensions: ['test.js', 'spec.js'], format: FileFormat.png },
    { icon: 'testts', extensions: ['test.ts', 'spec.ts'], format: FileFormat.png },
    { icon: 'tex', extensions: ['texi', 'tex'], format: FileFormat.png },
    { icon: 'text', extensions: [], languages: [languages.plaintext], format: FileFormat.png },
    { icon: 'textile', extensions: ['textile'], format: FileFormat.png },
    { icon: 'todo', extensions: ['todo'], format: FileFormat.png },
    { icon: 'toml', extensions: ['toml'], format: FileFormat.svg },
    { icon: 'travis', extensions: ['.travis.yml'], filename: true, format: FileFormat.png },
    { icon: 'tslint', extensions: ['tslint.json'], filename: true, format: FileFormat.png },
    { icon: 'twig', extensions: ['twig'], format: FileFormat.png },
    { icon: 'typescript', extensions: [], languages: [languages.typescript], format: FileFormat.svg },
    { icon: 'typescript_official', extensions: [], languages: [languages.typescript], format: FileFormat.svg, disabled: true },
    { icon: 'typescriptdef', extensions: ['d.ts'], format: FileFormat.svg },
    { icon: 'vagrant', extensions: ['vagrantfile'], filename: true, format: FileFormat.png },
    { icon: 'vash', extensions: ['vash'], format: FileFormat.png },
    { icon: 'vb', extensions: [], languages: [languages.vb], format: FileFormat.png },
    { icon: 'vbhtml', extensions: ['vbhtml'], format: FileFormat.png },
    { icon: 'vbproj', extensions: ['vbproj'], format: FileFormat.png },
    { icon: 'vim', extensions: ['vim'], format: FileFormat.svg },
    { icon: 'vim', extensions: ['.vimrc', '.gvimrc'], filename: true, format: FileFormat.svg },
    { icon: 'volt', extensions: ['volt'], format: FileFormat.png },
    {
      icon: 'vscode',
      extensions: [
        'vscodeignore.json',
        'launch.json',
        'tasks.json',
        'jsconfig.json',
        'tsconfig.json',
        '.vscodeignore',
      ],
      filename: true,
      format: FileFormat.svg,
    },
    { icon: 'vue', extensions: ['vue'], format: FileFormat.png },
    {
      icon: 'webpack',
      extensions: [
        'webpack.config.js',
        'webpack.config.common.js',
        'webpack.config.babel.js',
        'webpack.config.common.babel.js',
        'webpack.config.base.babel.js',
        'webpack.config.dev.babel.js',
        'webpack.config.staging.babel.js',
        'webpack.config.production.babel.js',
        'webpack.config.prod.babel.js',
        'webpack.config.dev.js',
        'webpack.config.staging.js',
        'webpack.config.production.js',
        'webpack.config.prod.js',
        'webpack.config.ts',
        'webpack.config.coffee',
      ],
      filename: true,
      format: FileFormat.svg,
    },
    { icon: 'wxml', extensions: ['wxml'], format: FileFormat.png },
    { icon: 'wxss', extensions: ['wxss'], format: FileFormat.png },
    { icon: 'xib', extensions: ['xib'], format: FileFormat.png },
    { icon: 'xliff', extensions: ['xliff', 'xlf'], format: FileFormat.png },
    { icon: 'xml', extensions: ['pex'], languages: [languages.xml], format: FileFormat.png },
    { icon: 'xsl', extensions: [], languages: [languages.xsl], format: FileFormat.png },
    { icon: 'yaml', extensions: ['yml'], languages: [languages.yaml], format: FileFormat.svg },
    { icon: 'yarn', extensions: ['yarnclean'], format: FileFormat.svg },
    { icon: 'yarn', extensions: ['yarn.lock'], filename: true, format: FileFormat.svg },
    { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: FileFormat.png },
  ],
};
