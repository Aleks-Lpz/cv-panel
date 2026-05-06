import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WorkExperience } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private firestore: Firestore) {}

  // Añadir un nuevo trabajo
  addWork(work: WorkExperience) {
    const workRef = collection(this.firestore, 'work-experience');
    return addDoc(workRef, work);
  }

  // Obtener la lista para editar
  getWork(): Observable<WorkExperience[]> {
    const workRef = collection(this.firestore, 'work-experience');
    return collectionData(workRef, { idField: 'id' }) as Observable<WorkExperience[]>;
  }
}
import { Admin } from './admin';

describe('Admin', () => {
  let service: Admin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Admin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  @Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    constructor(private firestore: Firestore) {}
  
    // Añadir un nuevo trabajo
    addWork(work: WorkExperience) {
      const workRef = collection(this.firestore, 'work-experience');
      return addDoc(workRef, work);
    }
  
    // Obtener la lista para editar
    getWork(): Observable<WorkExperience[]> {
      const workRef = collection(this.firestore, 'work-experience');
      return collectionData(workRef, { idField: 'id' }) as Observable<WorkExperience[]>;
    }
  }
});
