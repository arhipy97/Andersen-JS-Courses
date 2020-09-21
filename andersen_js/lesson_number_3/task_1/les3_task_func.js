function Grid (name, row, column, color) {
    this._tableName = name;
    this._rows = row;
    this._columns = column;
    this._bGcolor = color;

    this.showRowsAmount = function () {
        alert(`Rows number = ${this._rows}`);
    };

    // метод для расширения
    this.showColumnsAmount = function () {
        alert(`Columns number = ${this._columns}`);
    };

    this.showTableName = function () {
        alert(`Table name is = ${this._tableName}`);
    };

    // метод для переопределения, высосан из пальца, не знаю уже что писать
    this.setBackgroundColor = function () {
        document.body.style.background =  this._bGcolor;
    }

};

function FixRowsTable ( name, row, column, status = false) {
    Grid.apply(this, arguments);

    this.orderStatus = status;

    let checkTableSize = this.showColumnsAmount;
    this.showColumnsAmount = function () {
        checkTableSize.call(this);
        (this._columns !== 3)
        ? (alert ('Change the parameter to 3!')) 
        : (alert ('Your table is right!'))
    };

    this.setBackgroundColor = function () {
        document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
    }

    this.changeStatus = function () {
        this.orderStatus ? this.orderStatus = false : this.orderStatus = true;
    };

    this.editTableName = function () {
        this._tableName = prompt('Enter new name','')
    };

    this.undead  = function () {
        alert (`Жизнь за Нер'Зула!`)
    }
};

function MutableTable (name, row, column ) {
    Grid.apply(this, arguments);

    this.addColumn = function () {
        this._columns += 1;
    };

    this.addRow = function () {
        this._rows += 1;
    };

    this.removeColumn = function () {
        this._columns -= 1;
    }

    this.removeRow = function () {
        this._rows -= 1;
    }
};








