export function GetForm()
{
    return {
        "name":"Your custom Form",
        "sections":[
          {
            "key":"k1",
            "title":"Basic information",
            "groups":[
              {
                "key":"grp1",
                "title":"Name and occupation"  ,
                "controls":[
                  {
                    "label":"Please insert your name",
                    "type":"text",
                    "id":"ctrl-1",
                    "placeholder":"Full name here",
                    "value":""
                  },
                  {
                    "label":"Please select an occupation",
                    "type":"select",
                    "id":"ctrl-2",
                    "value":0,
                    "options":[
                    {"text":"Front end software developer","value":1},
                    {"text":"Full stack Developer","value":2},
                    {"text":"Talent Acquisition","value":3}
                  ]}
                ]

              }
            ]
          }      
        ]      
      };
}