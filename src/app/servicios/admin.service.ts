import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private firestore: Firestore) {}

  // Obtener datos de cualquier colección
  getData(colName: string): Observable<any[]> {
    const ref = collection(this.firestore, colName);
    return collectionData(ref, { idField: 'id' });
  }

  // Añadir nuevo documento
  add(colName: string, data: any) {
    const ref = collection(this.firestore, colName);
    return addDoc(ref, data);
  }

  // Actualizar documento existente
  update(colName: string, id: string, data: any) {
    const ref = doc(this.firestore, `${colName}/${id}`);
    return updateDoc(ref, data);
  }

  // Eliminar documento
  delete(colName: string, id: string) {
    const ref = doc(this.firestore, `${colName}/${id}`);
    return deleteDoc(ref);
  }
}
