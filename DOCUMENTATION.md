# makeZipper

[src/zipper.js:893-907](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L893-L907 "Source code on GitHub")

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

[src/zipper.js:75-75](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L75-L75 "Source code on GitHub")

Gets the value of the current location.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **(T | null)** 

# root

[src/zipper.js:469-469](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L469-L469 "Source code on GitHub")

Moves location to the root, constructing
any changes made.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# up

[src/zipper.js:449-460](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L449-L460 "Source code on GitHub")

Moves location to the parent, constructing a new parent
if the children have changed.

If already at the top, returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# down

[src/zipper.js:347-367](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L347-L367 "Source code on GitHub")

Moves location to the leftmost child.
If the current item is a leaf, returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# left

[src/zipper.js:243-266](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L243-L266 "Source code on GitHub")

Moves location to the left sibling.
If the current location is already the leftmost,
returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# right

[src/zipper.js:276-297](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L276-L297 "Source code on GitHub")

Moves location to the right sibling.
If the current location is already the rightmost,
returns null.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **([Zipper](#zipper) | null)** 

# leftmost

[src/zipper.js:212-233](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L212-L233 "Source code on GitHub")

Moves location to the leftmost sibling.
If the current location is already the leftmost,
returns itself.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# rightmost

[src/zipper.js:307-327](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L307-L327 "Source code on GitHub")

Moves location to the rightmost sibling.
If the current location is already the rightmost,
returns itself.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# next

[src/zipper.js:496-501](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L496-L501 "Source code on GitHub")

Moves location to the next element in depth-first order.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# prev

[src/zipper.js:511-515](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L511-L515 "Source code on GitHub")

Moves location to the previous element in depth-first order.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# isEnd

[src/zipper.js:130-130](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L130-L130 "Source code on GitHub")

Returns a boolean indicating if the zipper has been
exhausted by calls to `next`.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isTop

[src/zipper.js:149-149](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L149-L149 "Source code on GitHub")

Returns a boolean indicating if the zipper is at the top.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isNotTop

[src/zipper.js:156-156](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L156-L156 "Source code on GitHub")

Returns a boolean indicating if the zipper is not at the top.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isBranch

[src/zipper.js:101-103](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L101-L103 "Source code on GitHub")

Returns a boolean indicating if the current location is not a leaf.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isLeaf

[src/zipper.js:110-110](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L110-L110 "Source code on GitHub")

Returns a boolean indicating if the current location is a leaf.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isLeftmost

[src/zipper.js:174-174](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L174-L174 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the leftmost sibling.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# isRightmost

[src/zipper.js:182-182](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L182-L182 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the rightmost sibling.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoUp

[src/zipper.js:429-429](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L429-L429 "Source code on GitHub")

Returns a boolean indicating if the zipper is not at the top.

Alias for [isNotTop](#isnottop)

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoLeft

[src/zipper.js:192-192](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L192-L192 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the leftmost sibling.

Alias for [isLeftmost](#isleftmost)

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoRight

[src/zipper.js:202-202](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L202-L202 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the rightmost sibling.

Alias for [isRightmost](#isrightmost)

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# canGoDown

[src/zipper.js:335-337](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L335-L337 "Source code on GitHub")

Alias for `isBranch`

**Parameters**

-   `zipper` **[Zipper](#zipper)** 
-   `ipper`  

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# replace

[src/zipper.js:970-970](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L970-L970 "Source code on GitHub")

Replaces the current item with the given value.

**Parameters**

-   `replaceWith` **T** item to replace the current one with.
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# edit

[src/zipper.js:960-960](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L960-L960 "Source code on GitHub")

Replaces the current item with value returned
by calling `fn` with the current item.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function that takes the old item
                           and returns a new item.
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# insertLeft

[src/zipper.js:919-919](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L919-L919 "Source code on GitHub")

Inserts a new item as the left sibling.

**Parameters**

-   `item` **T** 
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# insertRight

[src/zipper.js:929-929](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L929-L929 "Source code on GitHub")

Inserts a new item as the right sibling.

**Parameters**

-   `item` **T** 
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# insertChild

[src/zipper.js:939-939](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L939-L939 "Source code on GitHub")

Inserts a new item as the leftmost child.

**Parameters**

-   `item` **T** 
-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# appendChild

[src/zipper.js:948-948](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L948-L948 "Source code on GitHub")

Inserts a new item as the rightmost child.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

# remove

[src/zipper.js:524-556](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L524-L556 "Source code on GitHub")

Removes item at the current location.
Returns location that would be previous in depth first search.

**Parameters**

-   `zipper` **[Zipper](#zipper)** 

Returns **[Zipper](#zipper)** 

# Zipper

[src/zipper.js:61-65](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L61-L65 "Source code on GitHub")

The Zipper class.

Keeps track of the current item, path, and metadata (implementation functions).

Don't use this constructor directly. Create your own Zipper factory with `makeZipper`, and use it to create instances of Zipper.

**Parameters**

-   `item`  
-   `path`  
-   `meta`  

## Zipper.prototype.value

[src/zipper.js:592-592](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L592-L592 "Source code on GitHub")

Gets the value of the current location.

Returns **(T | null)** 

## Zipper.prototype.root

[src/zipper.js:603-603](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L603-L603 "Source code on GitHub")

Moves location to the root, constructing
any changes made.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.up

[src/zipper.js:614-614](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L614-L614 "Source code on GitHub")

Moves location to the parent.
If at the top, returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.down

[src/zipper.js:625-625](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L625-L625 "Source code on GitHub")

Moves location to the leftmost child.
If the current item is a leaf, returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.left

[src/zipper.js:637-637](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L637-L637 "Source code on GitHub")

Moves location to the left sibling.
If the current location is already the leftmost,
returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.right

[src/zipper.js:649-649](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L649-L649 "Source code on GitHub")

Moves location to the right sibling.
If the current location is already the rightmost,
returns null.

Returns **([Zipper](#zipper) | null)** 

## Zipper.prototype.leftmost

[src/zipper.js:661-661](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L661-L661 "Source code on GitHub")

Moves location to the leftmost sibling.
If the current location is already the leftmost,
returns itself.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.rightmost

[src/zipper.js:673-673](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L673-L673 "Source code on GitHub")

Moves location to the rightmost sibling.
If the current location is already the rightmost,
returns itself.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.next

[src/zipper.js:683-683](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L683-L683 "Source code on GitHub")

Moves location to the next element in depth-first order.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.prev

[src/zipper.js:693-693](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L693-L693 "Source code on GitHub")

Moves location to the previous element in depth-first order.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.isEnd

[src/zipper.js:705-705](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L705-L705 "Source code on GitHub")

Returns a boolean indicating if the zipper has been
exhausted by calls to `next`.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isTop

[src/zipper.js:715-715](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L715-L715 "Source code on GitHub")

Returns a boolean indicating if the zipper is at the top.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isBranch

[src/zipper.js:725-725](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L725-L725 "Source code on GitHub")

Returns a boolean indicating if the current location is not a leaf.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isLeaf

[src/zipper.js:735-735](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L735-L735 "Source code on GitHub")

Returns a boolean indicating if the current location is a leaf.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isLeftmost

[src/zipper.js:746-746](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L746-L746 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the leftmost sibling.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.isRightmost

[src/zipper.js:757-757](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L757-L757 "Source code on GitHub")

Returns a boolean indicating if the item at the current location
is the rightmost sibling.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoUp

[src/zipper.js:767-767](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L767-L767 "Source code on GitHub")

Alias for `isTop`.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoLeft

[src/zipper.js:777-777](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L777-L777 "Source code on GitHub")

Alias for `isLeftmost`

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoRight

[src/zipper.js:787-787](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L787-L787 "Source code on GitHub")

Alias for `isRightmost`

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.canGoDown

[src/zipper.js:797-797](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L797-L797 "Source code on GitHub")

Alias for `isBranch`

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Zipper.prototype.edit

[src/zipper.js:810-810](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L810-L810 "Source code on GitHub")

Replaces the current item with value returned
by calling `fn` with the current item.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function that takes the old item
                           and returns a new item.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.replace

[src/zipper.js:821-821](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L821-L821 "Source code on GitHub")

Replaces the current item with the given value.

**Parameters**

-   `replaceWith` **T** item to replace the current one with.

Returns **[Zipper](#zipper)** 

## Zipper.prototype.insertLeft

[src/zipper.js:832-832](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L832-L832 "Source code on GitHub")

Inserts a new item as the left sibling.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.insertRight

[src/zipper.js:843-843](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L843-L843 "Source code on GitHub")

Inserts a new item as the right sibling.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.insertChild

[src/zipper.js:854-854](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L854-L854 "Source code on GitHub")

Inserts a new item as the leftmost child.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.appendChild

[src/zipper.js:865-865](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L865-L865 "Source code on GitHub")

Inserts a new item as the rightmost child.

**Parameters**

-   `item` **T** 

Returns **[Zipper](#zipper)** 

## Zipper.prototype.remove

[src/zipper.js:876-876](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/zipper.js#L876-L876 "Source code on GitHub")

Removes item at the current location.
Returns location that would be previous in depth first search.

Returns **[Zipper](#zipper)** 

# ArrayZipper

[src/array_zipper.js:12-16](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/array_zipper.js#L12-L16 "Source code on GitHub")

Zipper for nested Arrays.

Don't use with new keyword - use the function plainly
or with `ArrayZipper.from([1, 2, 3])`.

**Parameters**

-   `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** the data structure to make a zipper for

Returns **[Zipper](#zipper)** 

# walk

[src/walk.js:35-40](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/walk.js#L35-L40 "Source code on GitHub")

**Parameters**

-   `inner`  
-   `outer`  
-   `zipper`  

## walk.walk

[src/walk.js:35-40](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/walk.js#L35-L40 "Source code on GitHub")

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

[src/walk.js:55-57](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/walk.js#L55-L57 "Source code on GitHub")

Walks the data structure in depth-first order, applying
the function after the item's subtree has been walked.

Returns a new data structure of modified items, or the original
zipper if the structure wasn't modified.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function applied to each item after it's subtree was walked
-   `zipper` **[Zipper](#zipper)** A Zipper value to walk

Returns **[Zipper](#zipper)** 

## walk.preWalk

[src/walk.js:72-74](https://github.com/tommikaikkonen/zippa/blob/30089ae04351fad9f640541ced02e28e6f9e6d25/src/walk.js#L72-L74 "Source code on GitHub")

Walks the data structure in depth-first order, applying
the function before the item's subtree has been walked.

Returns a new data structure of modified items, or the original
zipper if the structure wasn't modified.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** function applied to each item before it's subtree is walked
-   `zipper` **[Zipper](#zipper)** A Zipper value to walk

Returns **[Zipper](#zipper)** 
