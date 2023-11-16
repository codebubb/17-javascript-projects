class ShoppingList {
    constructor(itemsSelector, addItemButtonSelector, newItemTextSelector, storageKey = 'shoppingList') {
        this.itemsElement = document.querySelector(itemsSelector);
        this.addItemButtonElement = document.querySelector(addItemButtonSelector);
        this.newItemTextElement = document.querySelector(newItemTextSelector);
        this.storageKey = storageKey;
        this.items = JSON.parse(localStorage.getItem(storageKey)) || ['apples', 'oranges'];
   
        this.initialise();
    }

    initialise() {
        this.addItemButtonElement.addEventListener('click', () => {
            this.addItem(this.newItemTextElement.value);
            this.newItemTextElement.value = '';
            this.renderItems();
            this.storeItems();
        });

        this.renderItems();
    }

    renderItems() {
        this.itemsElement.innerHTML = '';
        if (this.items.length === 0) {
            const itemElement = document.createElement('li');
            itemElement.textContent = 'No items';
            this.itemsElement.appendChild(itemElement);
        }
        
        this.items.forEach((item, index) => {
            const itemElement = document.createElement('li');
            itemElement.textContent = item;
            const removeElement = document.createElement('span');
            removeElement.textContent = 'Remove';
            removeElement.classList.add('remove-item');
            removeElement.onclick = () => {
                this.removeItemAt(index);
                this.renderItems();
                this.storeItems();
            }
            itemElement.appendChild(removeElement);
            this.itemsElement.appendChild(itemElement);
        })
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    removeItemAt(indexToRemove) {
        this.items = this.items.filter((item, itemIndex) => itemIndex != indexToRemove);
    }

    storeItems() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }
}

const myShoppingList = new ShoppingList('#shoppingListItems', '#addItem', '#newItemText')
