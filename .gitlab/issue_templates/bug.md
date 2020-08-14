---
name: Bug
about: Report from a defect.
title: "[BUG] "
labels: bug
assignees: ${assignee}
---

<!---
Kérlek olvasd el ezt!

Új kiadás megnyitása előtt feltétlenül keressen kulcsszavakat a kiadványokban
a "regresszió" vagy a "hiba" címkével szűrve:

- https://gitlab.com/krynegger/krynegger-crm/issues?label_name%5B%5D=regression
- https://gitlab.com/krynegger/krynegger-crm/issues?label_name%5B%5D=bug

és ellenőrizze, hogy a benyújtandó kérdés nem található-e másolatban.
--->

### Összegzés

(Röviden foglalja össze a felmerült hibát)

### A reprodukció lépései

(Hogyan lehet reprodukálni a kérdést - ez nagyon fontos)

### Példaprojekt

(Ha lehetséges, kérjük, hozzon létre egy példaprojektet a Krynegger CRM.com webhelyen, amely bemutatja a problémás viselkedést, és csatolja ide a hibajelentésben.)

(Ha a Krynegger CRM régebbi verzióját használja, ez azt is meghatározza, hogy a hiba javítva van-e egy újabb verzióban)

### Mi a jelenlegi * hiba * viselkedése?

(Mi történik valójában)

### Mi az elvárt * helyes * viselkedés?

(Mit kell látnod ehelyett)

### Releváns naplók és / vagy képernyőképek

(Illessze be a vonatkozó naplókat - kérjük, használja a kódblokkokat (`` `) a konzol kimenetének formázásához,
naplókat és kódot, mivel nehéz olvasni.)

### Ellenőrzések eredménye

(Ha egy hibát jelentetett a Krynegger CRM.com webhelyen, írja: Ez a hiba a Krynegger CRM.com webhelyen történik)

#### A Krynegger CRM környezeti információ eredménye

<details>
<summary> Bontsa ki a Krynegger CRM környezeti információhoz kapcsolódó kimenetet </summary>
<pre>

(Az omnibus-Krynegger CRM csomaggal rendelkező telepítéseknél futtassa és illessze be a következők kimenetét:
`sudo Krynegger CRM-rake Krynegger CRM: env: info`)

(Forrásból származó telepítésekhez illessze be és illessze be a következő kimenetet:
`sudo -u git -H csomag végrehajtó rake Krynegger CRM: env: info RAILS_ENV = production`)

</pre>
</details>

#### A Krynegger CRM alkalmazás ellenőrzésének eredményei

<details>
<summary> Bontsa ki a Krynegger CRM alkalmazásellenőrzéshez kapcsolódó kimenetet </summary>
<pre>

(Az omnibus-Krynegger CRM csomaggal rendelkező telepítéseknél futtassa és illessze be a következők kimenetét:
`sudo Krynegger CRM-rake Krynegger CRM: ellenőrizze a SANITIZE = true`)

(Forrásból származó telepítésekhez illessze be és illessze be a következő kimenetet:
`sudo -u git -H csomag végrehajtó rake Krynegger CRM: ellenőrizze RAILS_ENV = termelés SANITIZE = true`)

(csak akkor vizsgáljuk meg, ha a teszt sikeres-e)

</pre>
</details>

### Lehetséges javítások

(Ha tudsz, csatolj a kód sorához, amely a problémát okozhatja)

/label ~bug
