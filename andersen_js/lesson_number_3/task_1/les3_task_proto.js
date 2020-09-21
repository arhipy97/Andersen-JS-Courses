function Grid (name, row, column, color) {
    this._tableName = name;
    this._rows = row;
    this._columns = column;
    this._bGcolor = color;
};

Grid.prototype.getRowsAmount = function () {
        return this._rows;
    };

    // метод для расширения
Grid.prototype.getColumnsAmount = function () {
        alert(this._columns);
    };

Grid.prototype.getTableName = function () {
        return this._tableName;
    };

    // метод для переопределения, высосан из пальца
Grid.prototype.setBackgroundColor = function () {
        document.body.style.background = this._bGcolor;
    };


function FixRowsTable ( name, row, column, color, status = false) {
    this._tableName = name;
    this._rows = row;
    this._columns = column;
    this._bGcolor = color;
    this._orderStatus = status;
}
FixRowsTable.prototype = Object.create(Grid.prototype);
FixRowsTable.prototype.constructor = FixRowsTable;


FixRowsTable.prototype.getColumnsAmount = function () {
        Grid.prototype.getColumnsAmount.call(this);
        (this._columns !== 3)
        ? (alert ('Change the parameter to 3!')) 
        : (alert ('Your table is right!'))
    };

FixRowsTable.prototype.setBackgroundColor = function () {
        document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
    }

FixRowsTable.prototype.changeStatus = function () {
        return this._orderStatus ? this._orderStatus = false : this._orderStatus = true;
    };

FixRowsTable.prototype.editTableName = function () {
        this._tableName = prompt('Enter new name','')
    };

FixRowsTable.prototype.undead  = function () {
        alert (`Жизнь за Нер'Зула!`)
    }

function MutableTable (name, row, column ) {
    this._tableName = name;
    this._rows = row;
    this._columns = column;
}
MutableTable.prototype = Object.create(Grid.prototype);
MutableTable.prototype.constructor = MutableTable;

MutableTable.prototype.addColumn = function () {
        this._columns += 1;
    };

MutableTable.prototype.addRow = function () {
        this._rows += 1;
    };

MutableTable.prototype.removeColumn = function () {
        this._columns -= 1;
    }

MutableTable.prototype.removeRow = function () {
        this._rows -= 1;
    }








