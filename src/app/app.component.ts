import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    {
      values: [
        { label: 'dr suzane', value: 1  },
        { label: 'CRM', value: 121312  },
        { label: 'CRM2', value: 121312  },
        { label: 'CRM3', value: 121312  },
        { label: 'CRM4', value: 121312  },
        { label: 'CRM5', value: 121312  },
        { label: 'CRM6', value: 121312  },
      ]
    }, 
    {
      values: [
        { label: 'Silva', value: 1  },
        { label: '23', value: 555  },
        { label: 'rei', value: 555  },
        { label: 'tamar', value: 555  }
      ]
    }, 
    {
      values: [
        { label: 'CRM', value: 121312  },
        { label: 'CRM2', value: 121312  },
        { label: 'CRM3', value: 121312  },
        { label: 'CRM4', value: 121312  },
        { label: 'CRM5', value: 121312  },
        { label: 'CRM6', value: 121312  },
        { label: 'CRM', value: 121312  },
        { label: 'CRM2', value: 121312  },
        { label: 'CRM3', value: 121312  },
        { label: 'CRM4', value: 121312  },
        { label: 'CRM5', value: 121312  },
        { label: 'CRM6', value: 121312  },
      ]
    }, 
  ];
}
