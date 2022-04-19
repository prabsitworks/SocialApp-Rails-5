$(document).ready( function () {
    $('#static-table').DataTable();
  } );

$('#static-table').DataTable({
  processing: true,
  paging: true,
  serverSide: true,
  responsive: false,
  ajax: {
    "url": "/admin/" + $('#static-table').attr('user_id') + "/admin/fetch_users",
    "dataSrc": "users",
    dataFilter: function (data) {
      var json = jQuery.parseJSON(data);
      return JSON.stringify(json);
    },
  },
  columns: [
    {
      title: 'Image', data: null, searchable: false, sortable: false,
      render: function (data, type, row) {
        return '<img src="' + data['avatar']['url'] + '" style="margin-left:25px;" class="user_table_image_thumb_size" />'
      },
      createdCell: function (td, cellData, rowData, row, col) {
        $(td).css('position', 'relative');
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
      class: 'product-name',
      title: 'Email',
      data: null,
      searchable: true,
      render: function (data, type, row) {
        return '<span class="participant-name" data-participant-id="' + data.id + '" data-campaign-id="' + data.campaign_id + '">' +
            data.email + '</span>'
      }
    },
    {
      class: 'product-name',
      title: 'Phone',
      data: null,
      searchable: true,
      render: function (data, type, row) {
        return '<span class="participant-name" data-participant-id="' + data.id + '" data-campaign-id="' + data.campaign_id + '">' +
            data.phone + '</span>'
      }
    },
    {
      title: 'Clicks', data: null, searchable: false,
      render: function (data, type, row) {
        return '- - -'
      }
    },
    {
      title: 'Dates Active', data: null, searchable: false,
      render: function (data, type, row) {
        return formatDate(data.start) + ' -<br>' + formatDate(data.finish)
      }
    },
    {
      title: 'Date Created', data: null, searchable: false,
      render: function (data, type, row) {
        return formatDate(data.created_at)
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
  pageLength: 10,
  // oLanguage: {
  //   sProcessing: "<div class='spinner-border' role='status'><span class='sr-only'></span></div>"
  // },
  aoColumnDefs: [
    {'bSortable': false, 'aTargets': [0]}
  ],
  buttons: [
    {
      text: "<i class='feather icon-plus'></i> Add Challenge",
      className: "btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light"
    }
  ],
  initComplete: function (settings, json) {
    $(".dt-buttons .btn").removeClass("btn-secondary");
    // $('.dataTables_filter').addClass('search-icon-placement');
  }
});