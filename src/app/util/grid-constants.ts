export class GridConstants {

    private icons = {
        columns : '<ion-icon color="tertiary" name="settings-sharp"></ion-icon>',
        filter : '<ion-icon color="tertiary" name="funnel-outline"></ion-icon>',
        menu : '<ion-icon color="tertiary" class="custom-vert-elipsis-icon"></ion-icon>',
        columnDrag : '<span style="margin: 0px;"></span>',
    }

    getIcons() {
        return this.icons;
    }
}
