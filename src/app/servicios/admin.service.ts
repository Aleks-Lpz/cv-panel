import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WorkExperience } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private firestore: Firestore) {}

  // --- MÉTODOS PARA TRABAJO ---
  addWork(work: WorkExperience) {
    const workRef = collection(this.firestore, 'work-experience');
    return addDoc(workRef, work);
  }

  getWork(): Observable<WorkExperience[]> {
    const workRef = collection(this.firestore, 'work-experience');
    return collectionData(workRef, { idField: 'id' }) as Observable<WorkExperience[]>;
  }

  // --- MÉTODOS PARA EDUCACIÓN (Añádelos de una vez) ---
  addEducation(edu: any) {
    const eduRef = collection(this.firestore, 'education');
    return addDoc(eduRef, edu);
  }
}
