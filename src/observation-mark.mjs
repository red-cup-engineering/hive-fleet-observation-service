import { defineType } from "@red-cup-engineering/signcell/type-system";
import { createTypedMark, admitTypedMark } from "@red-cup-engineering/signcell/typed-mark";
import schema from "@lenticule-science/hive-fleet-observation-specification-service/schema" with { type: "json" };

const declaration = defineType({ id: schema.$id, name: schema.title, description: "Dated observations, without custody or hiring authority", schema, parents: [] });
if (!declaration.ok) throw new TypeError(declaration.refusal.message);
export const markHiveFleetObservation = observation => createTypedMark(declaration.value, observation);
export const admitHiveFleetObservation = mark => admitTypedMark(declaration.value, mark);
