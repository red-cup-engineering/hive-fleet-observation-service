# Hive fleet observation method

<!-- 561-group-standards:badges:start -->
[![Red Cup Engineering](https://img.shields.io/badge/561%20Group-Red%20Cup%20Engineering-c0392b)](https://github.com/red-cup-engineering)
[![License: MIT](https://img.shields.io/badge/license-MIT-c0392b)](LICENSE)
[![Indigenous data: CARE](https://img.shields.io/badge/Indigenous%20data-CARE-4b6f44)](https://github.com/red-cup-engineering/.github/blob/main/GOVERNANCE.md)
[![Tips welcome](https://img.shields.io/badge/tips-welcome-d4a017)](https://github.com/561-group/.github/blob/main/TIPS.md)
<!-- 561-group-standards:badges:end -->

`projectHiveFleetObservation(tick, tickDigest)` preserves source tick identity,
account-level observations, exact HIVE/HBD totals and interpretation limits.
Missing balances remain unknown. This method does not establish custody title,
authenticate an Actor, hire a provider, or execute wallet operations.

The source must explicitly provide an `accounts` array. An empty array is an
observed empty scope; an absent or malformed scope is refused. Missing execution
counts, operating flags and enabled lanes remain `null`, distinct from observed
zero, `false` and an empty lane list. Counts must be nonnegative safe integers;
malformed counts and totals beyond that range remain unknown. A fleet execution
total is known only when every account supplies that count. Receivers must not
interpret these unknowns as successful inactivity, income or complete coverage.
Every account record must name a nonempty string identity without surrounding
whitespace, and each identity may occur only once. Duplicate records are refused
before aggregation rather than counting the same account twice. Names are kept
as supplied; this observation method does not infer account aliases or ownership.

Red Cup supplies the method; Coesite binds provider identity, caller admission,
source reading and evidence custody. Consumers of this projection do not install
the resident fleet server, credential vault, signers, game integrations or legacy
Aagaard receiving protocols. Those other capabilities remain migration material
in the machine snapshot; this recovery does not claim their retirement.

The `./observation-mark` face creates and admits a SignCell typed mark using
Science's original observation schema. Operations retains its original import
face as a re-export. Admission refuses a known aggregate when any contributing
account value is unknown, independently for each balance and execution count.
This is structural admission, not proof of a sum, source truth or settlement.

The exact-number supplier is version 0.1.1 in Red Cup's computer-data source.
Both packages can be packed and supplied together to a consumer before registry
publication. A machine checkout and its folder ancestry are not dependencies.
