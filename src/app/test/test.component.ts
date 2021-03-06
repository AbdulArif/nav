import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ItemEventData } from '@nativescript/core'

@Component({
  selector: 'Test',
  templateUrl: './test.component.html',
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  countries: { name: string, imageSrc: string }[] = [
    { name: "Australia", imageSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FTwoJmwo_australian-flag-transparent-background-png-download-australian-flag%2F&psig=AOvVaw27NyS6AMrbIbuZZwfZBdXF&ust=1648547957429000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiywu3F6PYCFQAAAAAdAAAAABAD" },
    { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
    { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
    { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
    { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
    { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
    { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
    { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
    { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
    { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
    { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
    { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
    { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
    { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
    { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
    { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
    { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
];
onItemTap(args: ItemEventData): void {
  console.log('Item with index: ' + args.index + ' tapped');
}
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
