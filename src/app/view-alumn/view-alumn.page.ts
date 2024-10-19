import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-alumn',
  templateUrl: './view-alumn.page.html',
  styleUrls: ['./view-alumn.page.scss'],
})
export class ViewAlumnPage implements OnInit {
  username: string = '';
  showPokemonList: boolean = false; // Variable para controlar la visibilidad

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUserData().subscribe(userData => {
      if (userData) {
        this.username = userData.username;
      }
    });
  }

  togglePokemonList() {
    this.showPokemonList = !this.showPokemonList; // Alternar la visibilidad
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}