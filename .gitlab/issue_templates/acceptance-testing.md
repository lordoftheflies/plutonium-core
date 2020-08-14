---
name: Acceptance testing
about: Setup tests which defines the software accaptance.
title: "[ACCEPTANCE-TESTING] "
labels: acceptance-testing
assignees: ${assignee}
---

## Részletek
- **Funkcióváltó név**: „FEATURE_NAME”
- **Szükséges verzió**: `vX.X`

--------------------------------------------------------------------------------

## 1. Előkészítés

- [ ] **Vezérlők és dolgozók**:
  1. Kérjük, csatoljon a munkavállalók műszerfalához, valamint a vezérlőkhöz és az érintett tevékenységekhez
  2. ...
  3. ...

## 2. Fejlesztési próba

#### Ellenőrizze a Dev Server verzióit
- [ ] GitLab: https://development.gitlab.cherubits.hu/help

#### Engedélyezze a "development.gitlab.cherubits.hu" webhelyen:
- [ ] `/chatops funkciókészlet FEATURE_NAME true --dev` a [` # dev-gitlab`](https://cherubits.slack.com/messages/C6WQ87MU3)-ben

Ezután hagyja el a futtatást, miközben webes, api vagy SSH-n keresztül ellenőriz és ellenőriz bizonyos teszteket.


#### Monitor

- [ ] [Monitor a Grafana használatával](https://dashboard.gitlab.cherubits.hu)
- [ ] [Ellenőrizze a naplókat az ELK-ban](https://journal.gitlab.cherubits.hu/app/kibana)
- [ ] [Ellenőrizze a hibákat a Krynegger Sentry-ben](https://sentry.gitlab.net/gitlab/devgitlaborg/?query=is%3Aunresolved)

## 3. Átmeneti próba

#### Ellenőrizze az átmeneti szerver verziókat
- [ ] GitLab: https://staging.gitlab.com/help

#### Engedélyezze a "staging.gitlab.com" webhelyen
- [ ] `/chatops futtatja a (z) FEATURE_NAME funkciókészletet true --staging` a [` # fejlesztés`](https://cherubits.slack.com/messages/C02PF508L/)-ben 

Ezután hagyja folyamatosan futni, miközben ellenőrzi legalább ** 15 percig **, miközben tesztelést végez a web, api vagy SSH segítségével.

#### Monitor

- [ ] [Monitor a Grafana használatával](https://dashboard.gitlab.cherubits.hu)
- [ ] [Ellenőrizze a naplókat az ELK-ban](https://journal.gitlab.cherubits.hu/app/kibana)
- [ ] [Ellenőrizze a GitLab Sentry hibáit](https://sentry.gitlab.cherubits.hu/?query=is%3Aunresolved)ű

## 4. A termelési kiszolgáló verziójának ellenőrzése

- [ ] GitLab: https://gitlab.com/help

## 5. Kezdeti hatásvizsgálat

- [ ] Engedélyezhető egy felhasználói csoport számára, ha százalékos kapukat használ: 1%.

Ezután hagyja folyamatosan futni, miközben ellenőrzi legalább ** 15 percig **, miközben tesztelést végez a web, api vagy SSH segítségével.

#### Monitor

- [ ] [Monitor a Grafana használatával](https://dashboard.gitlab.cherubits.hu)
- [ ] [Ellenőrizze a naplókat az ELK-ban](https://journal.gitlab.cherubits.hu/app/kibana)
- [ ] [Ellenőrizze a GitLab Sentry hibáit](https://sentry.gitlab.cherubits.hu/?query=is%3Aunresolved)

## 6. Alacsony hatásvizsgálat

- [ ] Engedélyezhető nagyobb felhasználói csoport számára, ha százalékos kapukat használ: 10%.

Ezután hagyja futni, miközben ellenőrzi legalább ** 30 percig **, miközben tesztelést végez web, api vagy SSH segítségével.

#### Monitor

- [ ] [Monitor a Grafana használatával](https://dashboard.gitlab.cherubits.hu)
- [ ] [Ellenőrizze a naplókat az ELK-ban](https://journal.gitlab.cherubits.hu/app/kibana)
- [ ] [Ellenőrizze a GitLab Sentry hibáit](https://sentry.gitlab.cherubits.hu/?query=is%3Aunresolved)

## 7. Mid Impact próba

- [ ] Engedélyezhető egy nagy felhasználói csoport számára, ha százalékos kapukat használ: 50%.

Ezután hagyja folyamatosan futni, miközben ellenőrzi legalább **12 órán át**, miközben tesztelést végez a web, api vagy SSH segítségével.

#### Monitor

- [ ] [Monitor a Grafana használatával](https://dashboard.gitlab.cherubits.hu)
- [ ] [Ellenőrizze a naplókat az ELK-ban](https://journal.gitlab.cherubits.hu/app/kibana)
- [ ] [Ellenőrizze a GitLab Sentry hibáit](https://sentry.gitlab.cherubits.hu/?query=is%3Aunresolved)

## 8. Teljes hatásvizsgálat

- [ ] Engedélyezés minden felhasználó számára: `/chatops futtatja a (z) FEATURE_NAME szolgáltatáskészletet true

Ezután hagyja futni, miközben ellenőrzi legalább **1 hétig**.

#### Monitor

- [ ] [Monitor a Grafana használatával](https://dashboard.gitlab.cherubits.hu)
- [ ] [Ellenőrizze a naplókat az ELK-ban](https://journal.gitlab.cherubits.hu/app/kibana)
- [ ] [Ellenőrizze a hibákat a Krynegger Sentry-ben](https://sentry.gitlab.net/gitlab/devgitlaborg/?query=is%3Aunresolved)

#### Siker?

- [ ] Távolítsa el a szolgáltatás-kaput a kódból, és zárja le ezt a problémát az adott MR-vel.
