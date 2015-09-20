# Sample App for Electron

This is a fork of the [work of Thorsten Hans](https://github.com/ThorstenHans/electron-angular-es6) (original README below), corrected, completed, updated and adapted to my needs.

Because I only changed and sripped down existing code, I leave the original LICENSE as it was, hence leaving the copyright to Thorsten completely, accompanied by my true thanks to him for founding the base which effectively made this approach available to me.

## Requirements
For a start you will need the following executables (installable as indicated in parentheses):
* electron (``npm install electron-prebuilt -g``)
* gulp (``npm install gulp -g``)
* jspm (``npm install jspm -g``)

## Usage

### Building
* Change to the ``app`` subdirectory after cloning this repository.
* Execute ``npm install`` which in turn will call a ``jspm init`` where you simply confirm most of the defaults **except the following**:
  * "Enter server baseURL...": ``./browser``
  * "Which ES6 transpiler...": ``Babel`` (I haven't figured out yet, if the default ``babel`` with lowercase 'b' would work as well.)
* Run ``gulp`` which will subsequently transpile the source, copy the results to the ``package`` subdirectory and from there produce the self-contained application's zip file into ``dist``.

### Running
You can run the result in two ways:
* Unzip the packaged app and simply open it.
* Call ``electron .`` from the ``app`` subdirectory, which comes in handy during development.

You might adopt the ``Gulpfile.js`` to your personal workflow, e. g. remove building the application package from the ``default`` chain of tasks.


## Development workflow
As you correctly guessed already you develop the enhancements to this sample in the directories
* ``browser`` for electron's renderer task (frontend)
* ``main`` for the main thread (OS level "under the hood")

Re-cycling through the approprate build steps from above will reflect your changes in the resulting app.


## Caveats

### jspm: update browser loader files
As with all "fresh" technologies this implementation sample relies on interfaces which are subject to change.
One of the consequences is a possible version gap from time to time in one or more browser loader files, which (hopefully) are indicated on stderr by jspm. In those cases you should invoke an update on the command line:

``jspm dl-loader --latest``

Generally I recommend to have at least read the [Getting Started page](https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md) from the [jspm](http://jspm.io/) project and devloped a basic understanding of what it's doing.

### baseURL
Whenever you ran 'jspm init' correct line 2 of browser/config.js to:

``baseURL: __dirname + "/",``

### Consider freezing modules
When it comes to productive release branches you should (as always) consider either to fix the module versions in the ``package.json`` and ``config.js`` files for npm and jspm respectively (soft approach), or even not to gitignore the modules themselves when commiting to the repo, to get snapshots of your app which remain reproducable.
Especially because loader mechanisms (as already stated) might be subject to change.

----------------
original README (at time of fork):
----------------
# Sample App for Electron

For more details see the post on my blog [http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/](http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/)


## PreConditions for client

Ensure that the following node packages are installed on your system

 * jspm

you can install it using `npm i jspm -g`


## Install dependencies

After cloning the repo execute `npm i` in both subdirectories `app` and `server` to install all dependencies. For the client, `jspm install` will be invoked automatically as `npm postinstall` script!

## Creating the Electorn App package

Execute `gulp` in order to build the electron app.

The final electron app will be located as a zip file within the `dist` subfolder. Extract the ZIP file and start the electron app.

## Demonstrating CrashReporter

For demonstrating the `crash-reporter` you've to start the little `express` server from the `server` subfolder by invoking `node server.js` before crashing the app using the button...
