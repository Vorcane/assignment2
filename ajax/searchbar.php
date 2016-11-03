?php
                    $lastsearch = "lastsearch";
                    if(!isset($_COOKIE[$lastsearch])) {
                        $placeholdertext = "Enter product name";
                    } else {
                        $placeholdertext = "Last search: $_COOKIE[$lastsearch]";
                    }

                
                    echo "<form class='search' name='searchBar' action='javascript:AnyFunction();' method='POST'>";
                    echo "    <label>Search: <input type='text' id='search' name='searchbar' placeholder='$placeholdertext'></input> </label>";
                    echo "    <input type='submit' id='search-submit' value='search'></input>";
                    echo "</form>";
                ?>