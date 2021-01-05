
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ 
        
    ],
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        
    ]
})
export class PhotosModule {}