import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];
  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    console.log(`Undo: restaurando o estado de ImageEditor`);
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('Backup: no memento');
      return;
    }
    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento?.getName()} foi restaurado com sucesso`);
  }

  showMementos(): void {
    this.mementos.forEach((memento) => console.log(memento));
  }
}