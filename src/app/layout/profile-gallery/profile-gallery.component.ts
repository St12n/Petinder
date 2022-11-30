import {Component, OnInit} from '@angular/core';
import {Pet} from "../../model/Pet";
import {PetService} from "../../service/pet.service";
import {UntypedFormBuilder} from "@angular/forms";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets!: Pet[];
  selectedPet!: Pet;
  searchText!: string;

  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    profileText: '',
    image: ''
  })

  constructor(private petService: PetService, public formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.getPets()
  }

  private getPets() {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }

  onSubmit() {
    this.petService.addPet(this.addPetForm.value).subscribe(() => {
      console.log(`Your pet has been added`);
      this.addPetForm.reset();
      this.getPets();
    });}


}
