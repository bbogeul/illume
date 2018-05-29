Rsvps = new Mongo.Collection("rsvps");

Rsvps.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name *",
    optional: false, 
    min: 2,
    max: 80    
  },
  last: {
    type: String,
    label: "Last Name *",
    optional: false, 
    min: 2,
    max: 80    
  },
organization: {
    type: String,
    label: "Name of your business *",
    optional: false, 
    min: 2,
    max: 80    
  },
  website: {
    type: String,
    label: "Web Address (If you have one)",
    optional: false, 
    min: 4,
    max: 80    
  },
    email: {
    type: String,
    label: "Email Address *",
    optional: false, 
    min: 5,
    max: 80    
  },
  budget: {
    type: String,
    label: "Estimated Budget for your project",
    optional: false, 
    min: 1,
    max: 80    
  },
   phone: {
    type: Number,
    label: "Cellphone # *",
    optional: false 
  },
  industry: {
    type: String,
    label: "What industry is your business in? *",
    optional: false 
  },
  Competitors: {
    type: String,
    label: "Competitors? *",
    optional: false 
  },
  iadSense: {
      type: String,
      optional: false,
     label: "How did you hear about us?",
      autoform: {

        options: [
            {
               label: "Prior Client",
               value: "Prior Client"
            },
            {
               label: "Referral",
               value: "Referral"
            },
            {
               label: "Our Website",
               value: "Our Website"
            },
             {
               label: "Search Engine",
               value: "Search Engine"
            },
             {
               label: "Other",
               value: "Other"
            }
         ]
      }
   },
 
     whatElse: {
      type: String,
      optional: true,
      label: "Anything else we might need to know?",
      min: 20,
      max: 1000,
      autoform: {
         rows: 5
      }
   },
   another: {
    type: Boolean,
    optional: false,
    autoform: {
     type: "switch",
      trueLabel: "Online",
      falseLabel: "Offline"
    }
  },
  
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
}));

Rsvps.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});