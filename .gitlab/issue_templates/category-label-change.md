---
name: Change category label
about: This issue tracking category changes.
title: "[CATEGORY-LABEL-CHANGE] "
labels: category-label-change
assignees: ${assignee}
---

## Összegzés

Ez a sablon új vagy átnevező Kategóriacímkékhez készült. Ez az áttekintés segíti annak biztosítását, hogy a triada automatizálásával és a jelentésekkel ne legyen hatással.

### Akcióelemek

* [ ] Csatlakoztassa az egyesítési kérelmet a www-gitlab-com-hoz a [category.yml](https://portal.cherubits.hu/blob/master/data/categories.yml) módosításhoz
* [ ] (Ha alkalmazható) Címkeáttelepítés a meglévő problémákra és egyesítési kérelmekre: alkalmazza az új címkét a megnyitott és zárt kiadásokra, valamint a megnyitott és egyesített kérésekre.
* [ ] (Ha alkalmazható) Nevezze át a régi címkét úgy, hogy a címke nevére végül hozzáadja a „[DEPRECATED]”, például: „CI / CD [DEPRECATED]”.

/cc @lordoftheflies
/label ~quality-assurance
