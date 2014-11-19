angular-communication-example
=============================

This is a basic protoype illustrating how we can get rid of controllers. 

Instead have our independent components/directives fetch the data. 

When we do that a few problems come to my mind. 

- What about multiple components fetching the same data? 
- What about getting fresh data on deman?

Those are the kind of questions we attempt to answer on this example.

    <div class="jumbotron">
      <my-menu></my-menu>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-8">
        <my-coordinates></my-coordinates>
      </div>
      <div class="col-xs-6 col-md-4">
        <my-description></my-description>
      </div>
    </div>
    
    These three components (menu, coordinates and description) are all trying to get the same data.
  
  
