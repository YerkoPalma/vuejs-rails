# Vuejs + Rails template

[![wercker status](https://app.wercker.com/status/32093e2092763e525b666ca83111a24f/s "wercker status")](https://app.wercker.com/project/bykey/32093e2092763e525b666ca83111a24f)

This repo has a simple template for easy use of Rails and Vue.js 

## Usage

The project depend mainly on the [`browserify-rails` gem](https://github.com/browserify-rails/browserify-rails). 
So any npm dependencie (compatible with browserify) should be installed as in any project, on the root folder

    $ npm install --save [npm-module]

Tha basic idea is to make an Vue app for every rails controller, so, for instance, for a `UsersController.rb` should be a `users.js` file with the main Vue app for that controller
To automatically include a js file with the name of the controller, for each controller only, I added this line to the layout file

    <%= javascript_include_tag params[:controller] %>
    
Now, every action of the controller must return json data (Maybe is a better idea to make an API instead of renderin a json file)

    def index
        @users = User.all
    
        respond_to do |format|
            format.html # index.html.erb
            format.json { render json: @users }
        end
    end

One last important thing to notice is that it isn't support for `.vue` components.
Components are handled as partials with erb extension and registered in the main js file. This means that the component template is separated from the component logic.

## Structure

* `app/assets/javascript/[controller].js`: Contain the main Vue instance for the controller app
* `app/assets/javascript/[controller]/[component].js`: Contains the components for the controller (just the logic, not the template)
* `app/views/[controller]/index.html.erb`: Contain the main entry html file, it could be other different to index
* `app/views/[controller]/[components]/`: Contains all the js components for a controller
* `app/views/[controller]/[components]/[controller].js`: A partial that actually includes the rest of the components, this is the only partial included in the html view

## Instalation

    $ git clone [git-repo]
    $ cd [git-repo]
    $ npm install
    $ bundle install

### TODO

- [x] Replace Rails CRUD with Vue CRUD
    - [x] Add remaining actions
        - [x] Add Create Action
        - [x] Add Read single action
        - [x] Add Read all action
        - [x] Add Update action
        - [x] Add Delete action
    - [x] Add a router
    - [x] Use defined structure
    - [x] Remove extra code
- [ ] Add unit testing
    - [ ] Add js Unit testing
    - [x] Add Rails unit testing
    - [ ] Add Wercker CI
- [ ] Add Gulp tasks