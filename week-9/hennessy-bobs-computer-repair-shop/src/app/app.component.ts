import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hennessy-bobs-computer-repair-shop';

  services = {
    password: {
      name: "Password Reset",
      cost: 39.99
    },
    spyware: {
      name: "Spyware Removal",
      cost: 99.99
    },
    ram: {
      name: "RAM Upgrade",
      cost: 129.99
    },
    software: {
      name: "Software Installation",
      cost: 49.99
    },
    tune: {
      name: "Tune-up",
      cost: 89.99
    },
    cleaning: {
      name: "Keyboard Cleaning",
      cost: 45.00
    },
    disk: {
      name: "Disk Clean-up",
      cost: 149.99
    }
  }


  onSubmit(formData) {

    if (formData.checkGroup.password) {
      console.log(this.services.password.name + ' cost: $' + this.services.password.cost);
    }

    if (formData.checkGroup.spyware) {
      console.log(this.services.spyware.name + ' cost: $' + this.services.spyware.cost);
    }

    if (formData.checkGroup.ram) {
      console.log(this.services.ram.name + ' cost: $' + this.services.ram.cost);
    }

    if (formData.checkGroup.software) {
      console.log(this.services.software.name + ' cost: $' + this.services.software.cost);
    }

    if (formData.checkGroup.tune) {
      console.log(this.services.tune.name + ' cost: $' + this.services.tune.cost);
    }

    if (formData.checkGroup.cleaning) {
      console.log(this.services.cleaning.name + ' cost: $' + this.services.cleaning.cost);
    }

    if (formData.checkGroup.disk) {
      console.log(this.services.disk.name + ' cost: $' + this.services.disk.cost);
    }

    console.log('Cost of Labor: $' + formData.checkGroup.labor * 50);
    console.log('Cost of Parts: $' + formData.checkGroup.parts);


  }





}
