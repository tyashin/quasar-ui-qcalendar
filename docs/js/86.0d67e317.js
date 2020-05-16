(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{c0bc:function(n,e,l){"use strict";l.r(e),e["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%;\">\n    <q-calendar\n      v-model=\"selectedDate\"\n      view=\"week-scheduler\"\n      :resources=\"resources\"\n      :disabled-days=\"disabledDays\"\n      :resource-style=\"modifiedStyle\"\n      locale=\"en-us\"\n      style=\"height: 400px;\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01',\n      disabledDays: [\n        '2019-04-02',\n        '2019-04-03',\n        '2019-04-04',\n        '2019-04-05'\n      ],\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ]\n    }\n  },\n  methods: {\n    modifiedStyle (scope) {\n      if (scope.day.disabled === true) {\n        return {\n          backgroundColor: '#ffcb9c!important',\n          cursor: 'not-allowed'\n        }\n      }\n      return {}\n    }\n  }\n}\n<\/script>\n"}}]);