$(function() {

            // Custom View
            $("#jsGrid-custom").jsGrid({
                height: "70%",
                width: "100%",
                filtering: true,
                editing: false,
                sorting: true,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                controller: db,
                fields: [
                    { name: "Name", type: "text", width: 150 },
                    { name: "Age", type: "number", width: 50 },
                    { name: "Address", type: "text", width: 200 },
                    { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                    { type: "control", modeSwitchButton: false, editButton: false }
                ]
            });

            $(".config-panel input[type=checkbox]").on("click", function() {
                var $cb = $(this);
                $("#jsGrid-custom").jsGrid("option", $cb.attr("id"), $cb.is(":checked"));
            });

            // Custom Row Renderer

            $("#jsGrid-custom-row").jsGrid({
                height: "90%",
                width: "100%",
         
                autoload: true,
                paging: true,
         
                controller: {
                    loadData: function() {
                        var deferred = $.Deferred();
         
                        $.ajax({
                            url: 'http://api.randomuser.me/?results=40',
                            dataType: 'json',
                            success: function(data){
                                deferred.resolve(data.results);
                            }
                        });
         
                        return deferred.promise();
                    }
                },
         
                rowRenderer: function(item) {
                    var user = item.user;
                    var $photo = $("<div>").addClass("client-photo").append($("<img>").attr("src", user.picture.medium));
                    var $info = $("<div>").addClass("client-info")
                        .append($("<p>").append($("<strong>").text(user.name.first.capitalize() + " " + user.name.last.capitalize())))
                        .append($("<p>").text("Location: " + user.location.city.capitalize() + ", " + user.location.street))
                        .append($("<p>").text("Email: " + user.email))
                        .append($("<p>").text("Phone: " + user.phone))
                        .append($("<p>").text("Cell: " + user.cell));
         
                    return $("<tr>").append($("<td>").append($photo).append($info));
                },
         
                fields: [
                    { title: "Clients" }
                ]
            });
         
         
            String.prototype.capitalize = function() {
                return this.charAt(0).toUpperCase() + this.slice(1);
            };
        });