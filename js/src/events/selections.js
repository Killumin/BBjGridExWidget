/*
* This file is part of the grid project
* (c) Basis Europe <eu@basis.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export let gw_selectedRowsStack = [];

export function gw_onRowDoubleClicked(e) {

  const node = gw_parseNodeFromEvent(e);

  if (node) {
    gw_sendEvent({
      'type': 'grid-row-doubleclick',
      'detail': [[node]]
    });
  }
}

export function gw_onRowSelected(e) {
  gw_selectedRowsStack.push(e);
}

export function gw_onSelectionChanged() {

  let details = [];
  gw_selectedRowsStack.forEach(function (e) {

    const detail = gw_parseNodeFromEvent(e);
    console.log(detail)
    if (detail) details.push(detail);
  });

  if (details.length) {

    gw_selectedRowsStack = [];
    gw_sendEvent({
      'type': 'grid-row-select',
      'detail': [details]
    });
  }
}
