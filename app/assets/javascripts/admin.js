$(document).on('turbolinks:load', function () {
  $('#static-table').DataTable({
    processing: true,
    paging: true,
    serverSide: true,
    responsive: false,
    ajax: {
      url: "/fetch_users",
      dataSrc: "users",
      dataFilter: function (data) {
        var json = jQuery.parseJSON(data);
        return JSON.stringify(json);
      },
    },
    columns: [ 
      {
        title: 'Image', data: null, searchable: false, sortable: false,
        render: function (data, type, row) {
          return '<img src="' + data['image']['url'] + '" style="margin-left:10px;" class="user_table_image_thumb_size" />'
        }
      },
      {
        class: 'user-name',
        title: 'Name', data: null,
        searchable: true,
        render: function (data, type, row) {
          return '<span class="user-name" data-user-id="' + data.id + '">' +
              data.name + '</span>'
        }
      },
      {
        class: 'user-name',
        title: 'Email',
        data: null,
        searchable: true,
        render: function (data, type, row) {
          return '<span class="user-name" data-participant-id="' + data.id +  '">' +
              data.email + '</span>'
        }
      },
      {
        class: 'user-name',
        title: 'Phone',
        data: null,
        searchable: true,
        render: function (data, type, row) {
          return '<span class="user-name" data-participant-id="' + data.id + '">' +
              data.phone + '</span>'
        }
      },
      {
        class: 'product-action a',
        title: 'Actions', data: null, searchable: false, orderable: false,
        render: function (data, type, row) {
          actionText = data.disableyn ? ' Disable' : ' Enable'
          let action_html = "<div class='input-group' data-user-id ='" + data.id + "'>" +
                "<span class='dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><i class='feather icon-more-horizontal'></i></span>" +
                "<div class='dropdown-menu more_action_bg' x-placement='bottom-end' style='position: absolute;z-index: 9999;'>"

              action_html = action_html + "<a class='dropdown-item' href = 'disable/"  + data.id +
                "'data-toggle='tooltip' data-placement='top' data-original-title='Disable'>" +
                "<i class='feather icon-edit-2'></i> Disable</a>"
  
              action_html = action_html + "</div></div>"
              var btn = '';
            return action_html;
        }
        
      },
    ],
    dom: '<"top"<"actions action-btns"B><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: ""
    },
    aLengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 5,
    aoColumnDefs: [
      {'bSortable': false, 'aTargets': [0]}
    ],
    buttons: [
      {
        text: "<i class='feather icon-plus'></i>",
        className: "btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light"
      }
    ],
    initComplete: function (settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary");
    }
  });
});