class Grid {
    constructor(name, row, column, color) {
        this._tableName = name;
        this._rows = row;
        this._columns = column;
        this._bGcolor = color;
    }

    showRowsAmount() {
        alert(`${this._rows}`);
    };

    showColumnsAmount() {
        alert(`${this._columns}`);
    };

    showTableName() {
        alert(`${this._tableName}`);
    };

    setBackgroundColor() {
        document.body.style.background =  this._bGcolor;
    };
}


class FixRowsTable extends Grid {
    constructor(name, row, column, color, status = false) {
        super(name, row, column, color)
        this.orderStatus = status;
    }

    showColumnsAmount() {
        super.showColumnsAmount();
        (this._columns !== 3)
        ? (alert ('Change the parameter to 3!')) 
        : (alert ('Your table is right!'))
    };

    setBackgroundColor() {
        document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
    };

    changeStatus() {
        this.orderStatus ? this.orderStatus = false : this.orderStatus = true;
    };

    editTableName() {
        this._tableName = prompt('Enter new name','');
    };

    undead() {
        alert ('Жизнь за Нер`Зула!');
    };
};

const EXAMPLE_TABLE_FIRST = new FixRowsTable("Orders", 3, 3, "green", true)

class MutableTable extends Grid {
    constructor(name, row, column) {
        super(name, row, column)
    }

    addColumn() {
        this._columns += 1;
    }

    addRow() {
        this._rows += 1;
    }

    removeColumn() {
        this._columns -= 1;
    }

    removeRow() {
        this._rows -= 1;
    }
}

const EXAMPLE_TABLE_SECOND = new mutableTable("Users", 3, 3)