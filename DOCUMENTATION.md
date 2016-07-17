# makeZipper

[src/zipper.js:887-901](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L887-L901 "Source code on GitHub")

Makes a Zipper factory that uses the implementation provided
in the parameters.

**Parameters**

-   `_isBranch` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function with signature`(item: T) => boolean`
                                  that indicates if the item can have children.
-   `_getChildren` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function with signature`(item: T) => Array<T>`
                                     that returns an array of children for a branch.
-   `_makeItem` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function with signature`(item: T, children: Array<T>) => T`
                                  that returns a new item, given an old item and it's new children.

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** zipper factory with signature `(item: T) => Zipper`. The factory
                          can also be accessed from the factory's `from` property.

# value

[src/zipper.js:77-77](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L77-L77 "Source code on GitHub")

Gets the value of the current location.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **(T | null)** 

# root

[src/zipper.js:471-471](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L471-L471 "Source code on GitHub")

Moves location to the root, constructing
any changes made.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# up

[src/zipper.js:451-462](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L451-L462 "Source code on GitHub")

Moves location to the parent, constructing a new parent
if the children have changed.

If already at the top, returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# down

[src/zipper.js:349-369](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L349-L369 "Source code on GitHub")

Moves location to the leftmost child.
If the current item is a leaf, returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# left

[src/zipper.js:245-268](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L245-L268 "Source code on GitHub")

Moves location to the left sibling.
If the current location is already the leftmost,
returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# right

[src/zipper.js:278-299](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L278-L299 "Source code on GitHub")

Moves location to the right sibling.
If the current location is already the rightmost,
returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# leftmost

[src/zipper.js:214-235](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L214-L235 "Source code on GitHub")

Moves location to the leftmost sibling.
If the current location is already the leftmost,
returns itself.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# rightmost

[src/zipper.js:309-329](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L309-L329 "Source code on GitHub")

Moves location to the rightmost sibling.
If the current location is already the rightmost,
returns itself.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# next

[src/zipper.js:490-495](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L490-L495 "Source code on GitHub")

Moves location to the next element in depth-first order.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# prev

[src/zipper.js:505-509](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L505-L509 "Source code on GitHub")

Moves location to the previous element in depth-first order.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# isEnd

[src/zipper.js:132-132](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L132-L132 "Source code on GitHub")

Returns a boolean indicating if the zipper has been
exhausted by calls to `next`.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isTop

[src/zipper.js:151-151](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L151-L151 "Source code on GitHub")

Returns a boolean indicating if the zipper is at the top.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isNotTop

[src/zipper.js:158-158](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L158-L158 "Source code on GitHub")

Returns a boolean indicating if the zipper is not at the top.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isBranch

[src/zipper.js:103-105](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L103-L105 "Source code on GitHub")

Returns a boolean indicating if the current location is not a leaf.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isLeaf

[src/zipper.js:112-112](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L112-L112 "Source code on GitHub")

Returns a boolean indicating if the current location is a leaf.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isLeftmost

[src/zipper.js:176-176](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L176-L176 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the leftmost sibling.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isRightmost

[src/zipper.js:184-184](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L184-L184 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the rightmost sibling.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoUp

[src/zipper.js:431-431](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L431-L431 "Source code on GitHub")

Returns a boolean indicating if the zipper is not at the top.

Alias for [isNotTop](#isnottop)

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoLeft

[src/zipper.js:194-194](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L194-L194 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the leftmost sibling.

Alias for [isLeftmost](#isleftmost)

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoRight

[src/zipper.js:204-204](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L204-L204 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the rightmost sibling.

Alias for [isRightmost](#isrightmost)

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoDown

[src/zipper.js:337-339](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L337-L339 "Source code on GitHub")

Alias for `isBranch`

**Parameters**

-   `zipper` **[Zipper](#zipper)** 
-   `ipper`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# replace

[src/zipper.js:964-964](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L964-L964 "Source code on GitHub")

Replaces the current item with the given value.

**Parameters**

-   `replaceWith` **T** item to replace the current one with.
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# edit

[src/zipper.js:954-954](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L954-L954 "Source code on GitHub")

Replaces the current item with value returned
by calling `fn` with the current item.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function that takes the old item
                           and returns a new item.
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# insertLeft

[src/zipper.js:913-913](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L913-L913 "Source code on GitHub")

Inserts a new item as the left sibling.

**Parameters**

-   `item` **T** 
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# insertRight

[src/zipper.js:923-923](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L923-L923 "Source code on GitHub")

Inserts a new item as the right sibling.

**Parameters**

-   `item` **T** 
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# insertChild

[src/zipper.js:933-933](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L933-L933 "Source code on GitHub")

Inserts a new item as the leftmost child.

**Parameters**

-   `item` **T** 
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# appendChild

[src/zipper.js:942-942](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L942-L942 "Source code on GitHub")

Inserts a new item as the rightmost child.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

# remove

[src/zipper.js:518-550](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L518-L550 "Source code on GitHub")

Removes item at the current location.
Returns location that would be previous in depth first search.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# Zipper

[src/zipper.js:63-67](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L63-L67 "Source code on GitHub")

The Zipper class.

Keeps track of the current item, path, and metadata (implementation functions).

Don't use this constructor directly. Create your own Zipper factory with `makeZipper`,
and use it to create instances of Zipper.

**Parameters**

-   `item`  
-   `path`  
-   `meta`  

## Zipper.prototype.value

[src/zipper.js:586-586](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L586-L586 "Source code on GitHub")

Gets the value of the current location.

Returns **(T | null)** 

## Zipper.prototype.root

[src/zipper.js:597-597](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L597-L597 "Source code on GitHub")

Moves location to the root, constructing
any changes made.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.up

[src/zipper.js:608-608](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L608-L608 "Source code on GitHub")

Moves location to the parent.
If at the top, returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.down

[src/zipper.js:619-619](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L619-L619 "Source code on GitHub")

Moves location to the leftmost child.
If the current item is a leaf, returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.left

[src/zipper.js:631-631](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L631-L631 "Source code on GitHub")

Moves location to the left sibling.
If the current location is already the leftmost,
returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.right

[src/zipper.js:643-643](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L643-L643 "Source code on GitHub")

Moves location to the right sibling.
If the current location is already the rightmost,
returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.leftmost

[src/zipper.js:655-655](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L655-L655 "Source code on GitHub")

Moves location to the leftmost sibling.
If the current location is already the leftmost,
returns itself.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.rightmost

[src/zipper.js:667-667](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L667-L667 "Source code on GitHub")

Moves location to the rightmost sibling.
If the current location is already the rightmost,
returns itself.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.next

[src/zipper.js:677-677](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L677-L677 "Source code on GitHub")

Moves location to the next element in depth-first order.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.prev

[src/zipper.js:687-687](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L687-L687 "Source code on GitHub")

Moves location to the previous element in depth-first order.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.isEnd

[src/zipper.js:699-699](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L699-L699 "Source code on GitHub")

Returns a boolean indicating if the zipper has been
exhausted by calls to `next`.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isTop

[src/zipper.js:709-709](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L709-L709 "Source code on GitHub")

Returns a boolean indicating if the zipper is at the top.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isBranch

[src/zipper.js:719-719](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L719-L719 "Source code on GitHub")

Returns a boolean indicating if the current location is not a leaf.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isLeaf

[src/zipper.js:729-729](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L729-L729 "Source code on GitHub")

Returns a boolean indicating if the current location is a leaf.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isLeftmost

[src/zipper.js:740-740](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L740-L740 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the leftmost sibling.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isRightmost

[src/zipper.js:751-751](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L751-L751 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the rightmost sibling.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoUp

[src/zipper.js:761-761](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L761-L761 "Source code on GitHub")

Alias for `isTop`.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoLeft

[src/zipper.js:771-771](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L771-L771 "Source code on GitHub")

Alias for `isLeftmost`

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoRight

[src/zipper.js:781-781](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L781-L781 "Source code on GitHub")

Alias for `isRightmost`

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoDown

[src/zipper.js:791-791](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L791-L791 "Source code on GitHub")

Alias for `isBranch`

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.edit

[src/zipper.js:804-804](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L804-L804 "Source code on GitHub")

Replaces the current item with value returned
by calling `fn` with the current item.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function that takes the old item
                           and returns a new item.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.replace

[src/zipper.js:815-815](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L815-L815 "Source code on GitHub")

Replaces the current item with the given value.

**Parameters**

-   `replaceWith` **T** item to replace the current one with.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.insertLeft

[src/zipper.js:826-826](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L826-L826 "Source code on GitHub")

Inserts a new item as the left sibling.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.insertRight

[src/zipper.js:837-837](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L837-L837 "Source code on GitHub")

Inserts a new item as the right sibling.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.insertChild

[src/zipper.js:848-848](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L848-L848 "Source code on GitHub")

Inserts a new item as the leftmost child.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.appendChild

[src/zipper.js:859-859](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L859-L859 "Source code on GitHub")

Inserts a new item as the rightmost child.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.remove

[src/zipper.js:870-870](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/zipper.js#L870-L870 "Source code on GitHub")

Removes item at the current location.
Returns location that would be previous in depth first search.

Returns **[Zipper](#zipper)** 

# ArrayZipper

[src/array_zipper.js:12-16](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/array_zipper.js#L12-L16 "Source code on GitHub")

Zipper for nested Arrays.

Don't use with new keyword - use the function plainly
or with `ArrayZipper.from([1, 2, 3])`.

**Parameters**

-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** the data structure to make a zipper for

Returns **[Zipper](#zipper)** 

# walk

[src/walk.js:35-40](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/walk.js#L35-L40 "Source code on GitHub")

**Parameters**

-   `inner`  
-   `outer`  
-   `zipper`  

## walk.walk

[src/walk.js:35-40](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/walk.js#L35-L40 "Source code on GitHub")

Walks the data structure in depth-first order,
applying inner and outer functions before and after (respectively) each
item's subtree is walked.

Returns a new data structure from modified items, or the original
zipper if the structure wasn't modified.

**Parameters**

-   `inner` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function applied to each item before it's subtree is walked
-   `outer` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function applied to each item after it's subtree was walked
-   `zipper` **[Zipper](#zipper)** A Zipper value to walk

Returns **[Zipper](#zipper)** 

## walk.postWalk

[src/walk.js:55-57](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/walk.js#L55-L57 "Source code on GitHub")

Walks the data structure in depth-first order, applying
the function after the item's subtree has been walked.

Returns a new data structure of modified items, or the original
zipper if the structure wasn't modified.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function applied to each item after it's subtree was walked
-   `zipper` **[Zipper](#zipper)** A Zipper value to walk

Returns **[Zipper](#zipper)** 

## walk.preWalk

[src/walk.js:72-74](https://github.com/tommikaikkonen/zippa/blob/00b7aa18a70955fe5a7831d391e75ba7f8de29e9/src/walk.js#L72-L74 "Source code on GitHub")

Walks the data structure in depth-first order, applying
the function before the item's subtree has been walked.

Returns a new data structure of modified items, or the original
zipper if the structure wasn't modified.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function applied to each item before it's subtree is walked
-   `zipper` **[Zipper](#zipper)** A Zipper value to walk

Returns **[Zipper](#zipper)** 
