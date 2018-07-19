Recording = new Mongo.Collection("Recording");

Recording.attachSchema(new SimpleSchema({
  
 
 
pressureTop: {
    type: Number,
    label: "혈압 (위)"
},
pressureDown: {
    type: Number,
    label: "혈압 (아래)"
},
pulse: {
  type: Number,
  label: "맥박"

},
takeNote: {
    type: Boolean,
    defaultValue: false,
    label: 'important?'  
  },
pressureType: {
  type: String,
  autoform: {
    options: [
    {
              label: '저혈압',
              value: 'low'
           },
           {
              label: '정상',
              value: 'normal'
           },
           {
              label: '고혈압',
              value: 'high'
           }
    ]
  }

},
pulseType: {
  type: String,
  autoform: {
    options: [
    {
              label: '저혈압',
              value: 'low'
           },
           {
              label: '정상',
              value: 'normal'
           },
           {
              label: '고혈압',
              value: 'high'
           }
    ]
  }

},
specialNote: {
  type: String,
 
  label: "특정사항",
  optional: true
     
}, 
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }  
  }));
  Months = new Mongo.Collection("Months");

  Months.attachSchema(new SimpleSchema({
    monthsName: {
      type: String,
      autoform: {
        options: [
           {
              label: '1월',
              value: 'January'
           },
           {
              label: '2월',
              value: 'February'
           },
           {
              label: '3월',
              value: 'March'
           },
           {
              label: '4월',
              value: 'April'
           },
           {
              label: '5월',
              value: 'May'
           },
           {
              label: '6월',
              value: 'June'
           },
           {
              label: '7월',
              value: 'July'
           },
           {
              label: '8월',
              value: 'August'
           },
           {
              label: '9월',
              value: 'September'
           },
           {
              label: '10월',
              value: 'October'
           },
           {
              label: '11월',
              value: 'November'
           },
           {
              label: '12월',
              value: 'December'
           }
        ]
     }
         
    } 
    }));
    
    Months.allow({
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
  Recording.allow({
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