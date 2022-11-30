import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  pet?: Pet;

  constructor(private route: ActivatedRoute, private petService: PetService) {
  }

  ngOnInit() {
    let petName = this.route.snapshot.params['name'];
    this.petService.getPetByName(petName).subscribe(pet => this.pet = pet);
  }

}
