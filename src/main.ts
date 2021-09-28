
/**
 * Main class for Recitation 5. This can be used as sandbox to experiment in.
 * @author Nora Shoemaker
 *
 */

import { InheritanceSortedIntList } from "./InheritanceSortedIntList";
import { IntegerList } from "./IntegerList";



let list1: InheritanceSortedIntList = new InheritanceSortedIntList();
let list2: InheritanceSortedIntList = new InheritanceSortedIntList();

// add 5 elements to our first list.
list1.add(1);
list1.add(3);
list1.add(2);
list1.add(4);
list1.add(2);

printList(list1);
console.log(list1.getTotalAdded());

// add 2 elements to a second list.
list2.add(3);
list2.add(0);


// add the first list (5 elements) to our second list (2 elements).
list2.addAll(list1);

printList(list2);
console.log(list2.getTotalAdded());


/**
 * A helper function that prints out the contents of an IntegerList.
 * @param list IntegerList to be printed out.
 */
function printList(list: IntegerList) {
    for (let i = 0; i < list.size(); i++) {
        console.log(list.get(i));
        console.log(", ");
    }
    console.log();
}
