(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},t={"home-dead-bug":{...e[`dead-bug`],id:`home-dead-bug`,equipment:[]},"home-side-plank":{...e[`side-plank`],id:`home-side-plank`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},n={...e,...t},r={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]}};function i(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function a(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function o(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var s=[`push`,`pull`,`legs`,`home`],c=[`push`,`pull`,`legs`],l={new:4,some:5,experienced:7},u=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,d={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:u},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:u},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:u},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:u}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function f(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function p(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var m={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},h=`One light set of your first exercise at about half your usual weight.`,g={home:[`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`],push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,h],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,h],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,h]},_={home:[`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 30 seconds.`,`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`],push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},v={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},y={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},b={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function x(e,t){return e.equipment.every(e=>t.has(e))}function S(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function C(e,t){return t.some(t=>e.stress[t]===`high`)}function w(e,t,r,i){return e.options.map(e=>n[e]).filter(e=>!i.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>x(e,r)).filter(e=>!C(e,t.protectedAreas)).sort((e,n)=>S(e,t.protectedAreas).length-S(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:S(n,t.protectedAreas)}))}function T(e,t,n,r){return w(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function E(e,t,n){return e===`home`?[`2 minutes of marching in place to warm up.`,...t.protectedAreas.includes(`neckUpperBack`)?y.neckUpperBack??[]:[],...g.home]:[n?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...t.protectedAreas.flatMap(e=>y[e]??[]),...g[e]]}function D(e,t,n){let i=new Set(n),a=r[e],o=a.slots.slice(0,l[t.experience]),s=new Set,c=[];for(let e of o){let[n]=w(e,t,i,s);n&&(s.add(n.exercise.id),c.push(n))}let u=E(e,t,i.has(`bike`)),f=[..._[e],...t.protectedAreas.flatMap(e=>v[e]??[])];return{day:e,title:a.title,prescription:e===`home`?m[t.experience]:d[t.goal][t.experience],warmUp:u,exercises:c,coolDown:f}}var O={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`},k={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`};function A(e){return e===`home`?`No gym`:`Day ${c.indexOf(e)+1}`}function ee(e){return e===`home`?O.home:`${A(e)} ${O[e]}`}function te(e,t){return e===`home`?t:`${A(e)} · ${t}`}function ne(e,t,n=s){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">${A(t)}</small>${O[t]}
      </button>`).join(``)}</nav>`}function re(e){return`https://www.youtube.com/watch?v=${e}`}function j(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function ie(e){return e.cautionAreas.map(e=>`<p class="caution">${b[e]}</p>`).join(``)}function ae(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${j(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${re(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function M(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function oe(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var se=`https://ashnasahni.github.io/gym-guide/`,N={time:`18:00`,minutes:60},P=[30,45,60,90,120],F=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function ce(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function I(e){return{time:e?.time!==void 0&&ce(e.time)?e.time:N.time,minutes:e?.minutes!==void 0&&P.includes(e.minutes)?e.minutes:N.minutes}}function L(e){return String(e).padStart(2,`0`)}function le(e){return`${`${e.getFullYear()}${L(e.getMonth()+1)}${L(e.getDate())}`}T${L(e.getHours())}${L(e.getMinutes())}00`}function ue(e){return`${`${e.getUTCFullYear()}${L(e.getUTCMonth()+1)}${L(e.getUTCDate())}`}T${L(e.getUTCHours())}${L(e.getUTCMinutes())}${L(e.getUTCSeconds())}Z`}function de(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function fe(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function R(e){return e===`home`?O.home:`${O[e]} day`}function pe(e,t,n){let[r,i]=n.split(`:`).map(Number),o=a(e,(t-(e.getDay()+6)%7+7)%7);return o.setHours(r,i,0,0),o<=e?a(o,7):o}function me(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,i)=>{if(!e)return[];let a=pe(n,i,t.time),o=new Date(a.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${i}@ashnasahni.github.io`,`DTSTAMP:${ue(n)}`,`DTSTART:${le(a)}`,`DTEND:${le(o)}`,`RRULE:FREQ=WEEKLY;BYDAY=${F[i]}`,`SUMMARY:${de(R(e))}`,`DESCRIPTION:${de(`${r[e].title}\nOpen Gym Guide: ${se}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(fe).join(`\r
`)+`\r
`}function he(e,t){let n=P.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${n}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}var ge=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],z=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function _e(e,t,n){let r=i(e),s=o(e),c=new Map;for(let e of n)c.set(i(new Date(e.date)),e.day);return Array.from({length:7},(e,n)=>{let o=a(s,n),l=i(o),u={key:l,date:o,weekdayIndex:n,isToday:l===r},d=c.get(l);if(d)return{...u,status:`done`,workout:d};let f=t[n];return f?l<r?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}function ve(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function ye(e){return e.isToday?`Today`:`${z[e.weekdayIndex]}, ${ve(e.date)}`}function be(e){let t=e.status===`done`&&e.workout?`${O[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${O[e.workout]} planned`:e.status===`missed`&&e.workout?`${O[e.workout]} planned, not logged`:`rest day`;return`${z[e.weekdayIndex]} ${ve(e.date)}, ${t}${e.isToday?`, today`:``}`}function xe(e,t){return`
    <div class="calendar" role="group" aria-label="This week">${e.map(e=>{let n=e.workout?k[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${be(e)}">
          <span class="cal-weekday">${ge[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``)}</div>
    <p class="cal-legend">✓ done · ○ not logged · orange outline = today · tap a day to see it</p>
  `}function Se(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    <section class="card home-card">
      <h2>At-home abs <small>optional</small></h2>
      <p class="home-blurb">About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.</p>
      ${e.isToday?`<button type="button" class="secondary" data-day="home">Do at-home abs</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>

    ${e.isToday?`<section class="card">
             <p class="picker-hint">Want a gym workout instead?</p>
             ${ne(null,`Pick a gym workout for today`,c)}
           </section>`:``}`}function Ce(e){let t=[{value:`rest`,label:`Rest`,spoken:`Rest`},...s.map(e=>({value:e,label:k[e],spoken:O[e]}))];return`<div class="plan-editor">${z.map((n,r)=>{let i=e[r]??`rest`;return`
      <div class="plan-row">
        <span class="plan-day">${n}</span>
        <div class="plan-options">${t.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${r}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${n}: ${e.spoken}">${e.label}</button>`).join(``)}</div>
      </div>`}).join(``)}</div>`}var we=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],Te=we.map(e=>e.id),Ee=0;function De(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++Ee;n.onstart=()=>t?.onStart();let i=()=>{r===Ee&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function Oe(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function ke(e){`vibrate`in navigator&&navigator.vibrate(e)}var B=null,V=!1;async function H(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{B=await navigator.wakeLock.request(`screen`)}catch{B=null}}document.addEventListener(`visibilitychange`,()=>{V&&document.visibilityState===`visible`&&H()});function U(e){V=e,e?H():(B?.release(),B=null)}var Ae={waterGoal:8,proteinGoal:null,days:{}},je=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}];function W(e,t){return e.days[t]??{glasses:0,protein:[]}}function Me(e,t,n){return{...e,days:{...e.days,[t]:n}}}function Ne(e,t,n){let r=W(e,t);return Me(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function Pe(e,t,n){let r=W(e,t);return Me(e,t,{...r,protein:[...r.protein,n]})}function Fe(e,t,n){let r=W(e,t);return Me(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function Ie(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function Le(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}function Re(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function ze(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${Re(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function Be(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${M(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function Ve(e,t,n){let r=W(e,t),i=Ie(r),a=e.proteinGoal;return`
    <section class="card">
      <h2>Protein</h2>
      ${a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${Re(i,a)}`}
      ${r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${M(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${M(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`}

      <h3>Quick add</h3>
      <div class="quick-grid">${je.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``)}</div>
      <p class="hint small">Amounts are rough averages for a typical serving.</p>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${M(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="g" value="${M(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
        <button type="button" class="secondary" data-action="add-protein">Add</button>
      </div>
      ${n.error?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?Be(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function He(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water and protein help your muscles recover. Today's log resets at midnight.</p>
    </header>
    ${ze(e,W(e,t).glasses)}
    ${Ve(e,t,n)}
  `}var Ue={push:{name:`Push day mix`,songs:[{id:`c3P3lKFqYYM`,title:`Mundian To Bach Ke`,artist:`Panjabi MC`},{id:`7YuAzR2XVAM`,title:`Lose Yourself`,artist:`Eminem`},{id:`PsO6ZnUZI0g`,title:`Stronger`,artist:`Kanye West`},{id:`cl0a3i2wFcc`,title:`G.O.A.T.`,artist:`Diljit Dosanjh`},{id:`VNs_cCtdbPc`,title:`Brown Munde`,artist:`AP Dhillon, Gurinder Gill, Shinda Kahlon`},{id:`7wtfhZwyrcc`,title:`Believer`,artist:`Imagine Dragons`},{id:`cWMxCE2HTag`,title:`Softly`,artist:`Karan Aujla`}]},pull:{name:`Pull day mix`,songs:[{id:`eZ2PtEx9-ls`,title:`Tunak Tunak Tun`,artist:`Daler Mehndi`},{id:`U9XLJ6GkccI`,title:`HUMBLE.`,artist:`Kendrick Lamar`},{id:`4NRXx6U8ABQ`,title:`Blinding Lights`,artist:`The Weeknd`},{id:`jzpm7vkymSk`,title:`DJ Waley Babu`,artist:`Badshah, Aastha Gill`},{id:`9HDEHj2yzew`,title:`Physical`,artist:`Dua Lipa`},{id:`yqwbmjL8vd4`,title:`So High`,artist:`Sidhu Moose Wala`},{id:`L53gjP-TtGE`,title:`POWER`,artist:`Kanye West`}]},legs:{name:`Legs day mix`,songs:[{id:`btPJPFnesV4`,title:`Eye of the Tiger`,artist:`Survivor`},{id:`Obim8BYGnOE`,title:`'Till I Collapse`,artist:`Eminem, Nate Dogg`},{id:`wPQEeBAXou0`,title:`Warriors`,artist:`Imagine Dragons`},{id:`tOOy8PV1OCE`,title:`Do You Know`,artist:`Diljit Dosanjh`},{id:`CD-E-LDc384`,title:`Enter Sandman`,artist:`Metallica`},{id:`AxWejrVYcCg`,title:`Gonna Fly Now (Theme from Rocky)`,artist:`Bill Conti`}]},home:{name:`At-home abs mix`,songs:[{id:`4NRXx6U8ABQ`,title:`Blinding Lights`,artist:`The Weeknd`},{id:`9HDEHj2yzew`,title:`Physical`,artist:`Dua Lipa`},{id:`7wtfhZwyrcc`,title:`Believer`,artist:`Imagine Dragons`},{id:`cWMxCE2HTag`,title:`Softly`,artist:`Karan Aujla`},{id:`VNs_cCtdbPc`,title:`Brown Munde`,artist:`AP Dhillon, Gurinder Gill, Shinda Kahlon`},{id:`cl0a3i2wFcc`,title:`G.O.A.T.`,artist:`Diljit Dosanjh`}]}},We=`https://www.youtube.com/iframe_api`,Ge=1e4,Ke=.3,qe=8e3,Je=1,Ye=200,Xe=null;function Ze(){return window.YT?.Player?Promise.resolve(window.YT):(Xe??=new Promise((e,t)=>{let n=e=>{window.clearTimeout(r),Xe=null,t(Error(e))},r=window.setTimeout(()=>n(`timed out`),Ge);window.onYouTubeIframeAPIReady=()=>{window.clearTimeout(r),window.YT?e(window.YT):n(`player missing`)};let i=document.createElement(`script`);i.src=We,i.onerror=()=>n(`blocked or offline`),document.head.appendChild(i)}),Xe)}function Qe(e){let t=document.createElement(`section`);return t.id=`music-dock`,t.className=`music-dock`,t.hidden=!0,t.setAttribute(`aria-label`,`Music`),t.innerHTML=`
    <div class="dock-bar">
      <span class="dock-title"></span>
      <button type="button" class="link-button dock-stop">Stop music</button>
    </div>
    <div class="dock-player"></div>`,t.querySelector(`.dock-stop`)?.addEventListener(`click`,e),document.body.appendChild(t),t}function $e(e,t){let n=null,r=null,i=null,a=null,o=0,s=!1,c;function l(){return n??=Qe(f),n}function u(){let e=l().querySelector(`.dock-player`);e&&(e.innerHTML=`<div id="music-player"></div>`)}function d(e,n){return new Promise((r,i)=>{let a=window.setTimeout(()=>i(Error(`player timed out`)),Ge),s=new e.Player(`music-player`,{width:`100%`,height:String(Ye),playerVars:{playsinline:1,rel:0,enablejsapi:1,origin:window.location.origin},events:{onReady:()=>{window.clearTimeout(a),r(s)},onError:()=>{o+=1,o>=n?(f(),t(`None of these songs could play right now. Try again later.`)):s.nextVideo()},onStateChange:e=>{e.data===Je&&(o=0)}}})})}function f(){r?.destroy(),r=null,i=null,a=null,o=0,n&&(n.hidden=!0),document.body.classList.remove(`music-on`),e()}function p(){window.clearTimeout(c),r&&a!==null&&(r.setVolume(a),a=null)}async function m(n){if(i===n&&r){r.playVideo();return}if(s)return;s=!0;let a=Ue[n],c=l(),p=c.querySelector(`.dock-title`);p&&(p.textContent=`♪ ${a.name}`),c.hidden=!1,document.body.classList.add(`music-on`);try{let t=await Ze();r?.destroy(),r=null,u(),o=0,r=await d(t,a.songs.length),r.loadPlaylist({playlist:a.songs.map(e=>e.id),index:0}),r.setLoop(!0),i=n,e()}catch{f(),t(`Couldn't load the music. Check your connection and try again.`)}finally{s=!1}}return{play:m,stop:f,current:()=>i,duck(){r&&a===null&&(a=r.getVolume(),r.setVolume(Math.round(a*Ke)),c=window.setTimeout(p,qe))},restore:p}}function et(e,t){let n=Ue[e],r=t===e?`<p class="music-status">♪ Playing now. The player is at the bottom of the screen. If it's silent, tap play there.</p>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}">▶ Play ${n.name}</button>`;return`
    <section class="card music-card">
      <h2>Music</h2>
      <p class="music-name">${n.name} · ${n.songs.length} songs</p>
      ${r}
      <p class="hint small">Plays through YouTube and keeps going while you move around the app. Some songs are explicit.</p>
    </section>`}function tt(e,t){if(t===e)return``;let n=Ue[e];return`
    <section class="card music-card music-row">
      <div>
        <h2>Music</h2>
        <p class="music-name">${n.name}</p>
      </div>
      <button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>
    </section>`}var nt=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],rt=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],it=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],G={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null]};function at(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=c[n%c.length]}),t}function ot(e){let{gymDays:t,...n}=e,r={...G,...n};if(!n.weekPlan&&Array.isArray(t)){let e=at(t);e.some(Boolean)&&(r.weekPlan=e)}return r}var K=5;function st(e,t){let n=e[t];return n?.[n.length-1]}function q(e,t){let n=e.sets.map(e=>e.amount).join(`, `),r=e.sets[e.sets.length-1]?.weight,i=t===`seconds`?` sec`:` reps`;return r==null?`${n}${i}`:`${r} lb × ${n}${i}`}function ct(e,t,n){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let r=e.sets.every(e=>e.amount>=t.max),i=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,a=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||a===null)return{weight:null,message:r?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let o=n===`assist`?Math.max(0,a-K):a+K,s=n===`assist`?a+K:Math.max(0,a-K);return r?{weight:o,message:n===`assist`?`You hit ${t.max} reps every set. Try ${o} lb of help (a little less).`:`You hit ${t.max} reps every set. Try ${o} lb.`}:i?{weight:s,message:`That was heavy. Try ${s} lb and aim for ${t.min}–${t.max} reps.`}:{weight:a,message:`Stay at ${a} lb and aim for ${t.max} reps on every set.`}}function lt(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function ut(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function dt(e,t){let n=o(t);return ut(e).filter(e=>new Date(e.date)>=n).length}function ft(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}var pt=10;function mt(e){return e.timedSeconds?`seconds`:`reps`}function J(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function ht(e,t){let n=e.weightKind??`load`;return n===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:n===`assist`?`${t} lb of help`:`${t} lb`}function gt(e,t,n){let r={top:22,right:20,bottom:22,left:20},i=Math.min(...n),a=Math.max(...n),o=a-i||1,s=e=>r.left+e*(300-r.left-r.right)/(n.length-1),c=e=>r.top+(a-e)*(110-r.top-r.bottom)/o,l=n.map((e,t)=>`${t===0?`M`:`L`}${s(t).toFixed(1)},${c(e).toFixed(1)}`).join(` `),u=n.map((n,r)=>{let i=`${J(t[r])}: ${ht(e,n)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${s(r)}" cy="${c(n)}" r="14" class="hit" />
          <circle cx="${s(r)}" cy="${c(n)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e.name} over time">
      <line x1="${r.left}" x2="${300-r.right}" y1="${110-r.bottom+6}" y2="${110-r.bottom+6}" class="baseline" />
      <path d="${l}" class="trend-line" />
      ${u}
      <text x="${s(0)}" y="${c(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${s(n.length-1)}" y="${c(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${r.left}" y="106" class="axis-label">${J(t[0])}</text>
      <text x="${300-r.right}" y="106" class="axis-label" text-anchor="end">${J(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function _t(e){return Object.entries(e).filter(([e,t])=>n[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let r=n[e],i=t.filter(e=>e.sets.length>0),a=ft(i,r.weightKind??`load`),o=i[i.length-1],s=(r.weightKind??`load`)===`assist`?Math.min(...a):Math.max(...a),c=a.length>=2?gt(r,i.map(e=>e.date),a):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${r.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${ht(r,s)}</strong></span>
            <span>Last: ${q(o,mt(r))}</span>
          </p>
          ${c}
        </section>`}).join(``)}function vt(e){return ut(e).slice(0,pt).map(e=>{let t=e.entries.filter(({exerciseId:e})=>n[e]).map(({exerciseId:e,session:t})=>{let r=n[e];return`<li>${r.name}: <span class="hint">${q(t,mt(r))}</span></li>`}).join(``);return`
        <section class="card">
          <h3 class="progress-name">${J(e.date)}</h3>
          <ul class="summary">${t}</ul>
        </section>`}).join(``)}function yt(e,t,n){let r=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(ut(e).length===0)return`${r}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>`;let i=dt(e,t);return`${r}
    <section class="card week-card">
      <p class="week-count"><strong>${i}</strong> of ${n}</p>
      <p>workouts this week${i>=n?` — goal reached!`:``}</p>
      <p class="hint">That's the number of workout days in your week plan (change it in Profile). The week starts Monday.</p>
    </section>

    <h2 class="section-title">Exercises</h2>
    ${_t(e)}

    <h2 class="section-title">Recent workouts</h2>
    ${vt(e)}
  `}function bt(e,t){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:e.prescription,index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null}}function Y(e){return e.exercises[e.index]}function xt(e){return e.setNumber>=e.prescription.sets}function St(e){return e.index>=e.exercises.length-1}function Ct(e){return{...e,phase:`log`}}function wt(e,t){if(xt(e)&&St(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return xt(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function Tt(e){return{...e,phase:`lift`,restEndsAt:null}}function Et(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function Dt(e){return St(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function Ot(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function X(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}var kt=`gymGuide.v1`;function At(){return{profile:null,equipmentIds:[...Te],equipmentConfirmed:!1,history:{},session:null,nutrition:Ae,workoutLog:[],calendar:N}}function jt(){try{let e=localStorage.getItem(kt);if(!e)return At();let t=JSON.parse(e);return{...At(),...t,profile:t.profile?ot(t.profile):null,nutrition:{...Ae,...t.nutrition},calendar:I(t.calendar)}}catch{return At()}}function Z(e){try{return localStorage.setItem(kt,JSON.stringify(e)),!0}catch{return!1}}function Q(e,t,n){let r=st(e,n);return r&&r.date===t.startedAt?r.sets:[]}function Mt(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Nt(e,t,n){let r=p(n.exercise,t.prescription);return ct(Mt(e,t,n.exercise.id),r,n.exercise.weightKind??`load`)}function Pt(e,t){let n=p(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${ee(e.day)}`}function Ft(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function It(e,t,n,r,i){let a=Y(e);if(!a)return``;let o=Mt(t,e,a.exercise.id),s=p(a.exercise,e.prescription),c=Nt(t,e,a),l=Q(t,e,a.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${a.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${Pt(e,a)}</p>
      ${o?`<p class="last-time">Last time: ${q(o,s.unit)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${c.message}</p>`:``}
      ${l.length>0?`<p class="last-time">Today so far: ${q({date:``,sets:l},s.unit)}</p>`:``}
    </section>

    ${ie(a)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${ae(a)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${tt(e.day,i)}
    ${Ft(n,!0)}
  `}function Lt(e,t){let n=e.exercises.reduce((n,r)=>n+Q(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function Rt(e,t){let n=Y(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function zt(e,t,n){let r=Y(e);if(!r)return``;let i=r.exercise.weightKind??`load`,a=p(r.exercise,e.prescription),o=r.exercise.equipment.includes(`dumbbells`),s=i===`assist`?`Help from the machine (lb)`:o?`Weight (lb, per dumbbell)`:`Weight (lb)`,c=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Set ${e.setNumber} done</h1>
      <p class="lead">${r.exercise.name}: what did you do?</p>
    </header>

    <section class="card">
      ${i===`bodyweight`?``:c(`weight`,s,t.weight,5)}
      ${c(`amount`,a.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    <button type="button" class="primary big" data-action="save-set">Save set</button>
  `}function Bt(e,t,n,r){let i=Y(e);if(!i)return``;let a=e.setNumber===1?`Next exercise: <strong>${i.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${i.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${oe(X(e,t))}</p>
      <p>${a}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${tt(e.day,r)}
    ${Ft(n)}
  `}function Vt(e,t,n){return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${e.exercises.map(n=>{let r=Q(t,e,n.exercise.id),i=p(n.exercise,e.prescription).unit,a=r.length>0?q({date:``,sets:r},i):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${a}</span></li>`}).join(``)}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${j(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function Ht(e,t){let n=p(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function Ut(e,t){let n=Y(e);if(!n)return``;let r=[e.setNumber===1?`${n.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${Ht(e,n)}.`],i=Nt(t,e,n);return e.setNumber===1&&i.weight!==null&&r.push(`Try ${i.weight} pounds.`),r.filter(Boolean).join(` `)}function Wt(e){return`Rest ${e.prescription.restSeconds} seconds.`}function Gt(e){let t=Y(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var Kt=10,qt=30,Jt=`If the pain was sharp or keeps coming back, stop and get it checked.`;function Yt(e){let t=jt(),r=t.profile?t.equipmentConfirmed?`today`:`equipment`:`profile`,a=i(new Date),o=null,s=t.profile?{...t.profile}:{...G},c,l={name:``,grams:``,goal:``,error:``},u=!0,d={weight:``,amount:``},m=``,h,g=!1,_=``,v=null,y=!1,b=$e(E,S);function x(e){S(Z(t)?e:`Couldn't save on this device — changes last until you close the page.`)}function S(t){let n=e.querySelector(`.toast`);n&&(n.textContent=t,n.classList.add(`visible`),window.clearTimeout(c),c=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function C(e){u&&e&&De(e,{onStart:b.duck,onEnd:b.restore})}function w(e){r=e,e===`profile`&&(s=t.profile?{...t.profile}:{...G}),E(),window.scrollTo(0,0)}function E(){let n=t.profile!==null&&t.equipmentConfirmed,r=t.session!==null;document.body.classList.toggle(`has-nav`,n&&!r),e.innerHTML=`
      <main class="screen">${r?ve():O()}</main>
      ${n&&!r?de():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `}function O(){if(r===`profile`)return A();if(r===`equipment`)return se();if(r===`progress`){let e=(t.profile??G).weekPlan.filter(Boolean).length;return yt(t.history,new Date,e)}return r===`fuel`?He(t.nutrition,i(new Date),l):ue()}function k(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function A(){let e=t.profile===null;return`
      <header class="screen-header">
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${nt.map(e=>k(`goal`,e.id,e.label,s.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row">
          ${rt.map(e=>k(`experience`,e.id,e.label,s.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Your week</h2>
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs. You can change this any time.</p>
        ${Ce(s.weekPlan)}
      </section>

      ${t.profile?he(t.calendar,ee(t.profile)):``}

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${it.map(e=>k(`area`,e.id,e.label,s.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${re()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function ee(e){return JSON.stringify(s.weekPlan)!==JSON.stringify(e.weekPlan)}function re(){let e=t.profile?.avoidedExerciseIds??[];return e.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${e.filter(e=>n[e]).map(e=>`
        <li class="avoided-item">
          <span>${n[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function M(e,n){if(!t.profile)return;let r=t.profile.avoidedExerciseIds.filter(t=>t!==e);t.profile={...t.profile,avoidedExerciseIds:n?[...r,e]:r},s={...s,avoidedExerciseIds:t.profile.avoidedExerciseIds}}function se(){let e=!t.equipmentConfirmed,n=new Set(t.equipmentIds);return`
      <header class="screen-header">
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${we.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${n.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function N(e,n,r){let{exercise:i}=e,a=st(t.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${n+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${q(a,r)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${ie(e)}
          ${ae(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function F(e){return D(e,t.profile??G,t.equipmentIds)}function I(){let e=_e(new Date,(t.profile??G).weekPlan,t.workoutLog),n=e.find(e=>e.key===a)??e.find(e=>e.isToday)??e[0];return{week:e,selected:n,shown:(n.isToday&&n.status!==`done`?o:null)??n.workout}}function L(e){t.workoutLog=[...t.workoutLog,{date:new Date().toISOString(),day:e}],o=null}function le(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${ne(e,`Workout for today`)}
      </details>`}function ue(){let{week:e,selected:t,shown:n}=I(),r=xe(e,t.key);if(n===null)return`
        <header class="screen-header">
          <p class="eyebrow">${ye(t)}</p>
          <h1>Rest day</h1>
        </header>
        ${r}
        ${Se(t)}
      `;let i=F(n),a=t.status===`done`,o=t.status===`missed`,s=t.isToday&&!a,c=e.some(e=>e.isToday&&e.status!==`done`),l=i.exercises.length>0,u=l?i.exercises.map((e,t)=>N(e,t,p(e.exercise,i.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,d=l?a?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:s?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:o?`<p class="notice">○ This one wasn't logged. It was planned for ${z[t.weekdayIndex]}.</p>
               ${c?`<button type="button" class="secondary" data-action="do-today" data-workout="${n}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:ye(t)}</p>
        <h1>${te(n,i.title)}</h1>
      </header>

      ${r}

      ${d}
      ${s?le(n):``}

      ${et(n,b.current())}

      <section class="card">
        <h2>Warm up first</h2>
        ${j(i.warmUp,`warm-up`)}
      </section>

      <section class="card prescription">
        <h2>For every exercise</h2>
        <p>${f(i.prescription)}</p>
      </section>

      <p class="tap-hint">Tap an exercise to see how to do it.</p>
      <div class="exercise-list">${u}</div>

      <section class="card">
        <h2>Cool down</h2>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${j(i.coolDown,`warm-up`)}
      </section>

      ${l&&s?`<button type="button" class="secondary" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function de(){let e=(e,t)=>`<button type="button" class="nav-item${r===e||e===`profile`&&r===`equipment`?` active`:``}" data-nav="${e}">${t}</button>`;return`<nav class="bottom-nav" aria-label="Main">${e(`today`,`Workout`)}${e(`progress`,`Progress`)}${e(`fuel`,`Fuel`)}${e(`profile`,`Profile`)}</nav>`}function fe(){let n=e.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!ce(n)){S(`Pick a start time first.`);return}let r=Number(e.querySelector(`select[data-field="cal-minutes"]`)?.value),i=P.includes(r)?r:t.calendar.minutes;t.calendar={time:n,minutes:i},Z(t);let a=(t.profile??G).weekPlan;Oe(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,me(a,t.calendar,new Date)),S(`Calendar file downloaded. Open it to add your workouts.`)}function R(t){return e.querySelector(`input[data-field="${t}"]`)?.value??``}function pe(){l={name:R(`protein-name`),grams:R(`protein-grams`),goal:R(`protein-goal`),error:``}}function ge(e,n,r){pe();let a=i(new Date),o=t.nutrition;if(e===`water`)t.nutrition=Ne(o,a,Number(n));else if(e===`water-goal`)t.nutrition={...o,waterGoal:Math.min(20,Math.max(1,o.waterGoal+Number(n)))};else if(e===`quick-protein`){let e=je[Number(r)];e&&(t.nutrition=Pe(o,a,e))}else if(e===`add-protein`){let e=Le(l.name,l.grams);e?l.error=e:(t.nutrition=Pe(o,a,{name:l.name.trim(),grams:Number(l.grams)}),l={...l,name:``,grams:``})}else if(e===`remove-protein`)t.nutrition=Fe(o,a,Number(r));else if(e===`set-protein-goal`){let e=Number(l.goal);!Number.isInteger(e)||e<1||e>400?l.error=`Enter a protein goal in whole grams, between 1 and 400.`:t.nutrition={...o,proteinGoal:e}}else e===`clear-protein-goal`&&(l.goal=String(o.proteinGoal??``),t.nutrition={...o,proteinGoal:null});Z(t)||(l.error=`Couldn't save on this device.`),E()}function ve(){let e=t.session;if(!e)return``;if(y)return Lt(e,t.history);switch(e.phase){case`lift`:return v?Rt(e,v):It(e,t.history,u,_,b.current());case`log`:return zt(e,d,m);case`rest`:return Bt(e,Date.now(),u,b.current());case`done`:return Vt(e,t.history,F(e.day).coolDown)}}function be(){let e=t.session,n=e&&Y(e);if(!e||!n)return;let r=Q(t.history,e,n.exercise.id),i=r[r.length-1],a=Nt(t.history,e,n),o=p(n.exercise,e.prescription),s=i?.weight??a.weight;d={weight:s==null?``:String(s),amount:String(i?.amount??o.max)},m=``}function Te(t){return e.querySelector(`input[data-field="${t}"]`)?.value.trim()??``}function Ee(){let e=t.session,n=e&&Y(e);if(!e||!n)return;let r=(n.exercise.weightKind??`load`)===`bodyweight`;d={weight:Te(`weight`),amount:Te(`amount`)};let i=Number(d.amount);if(!Number.isInteger(i)||i<1||i>300){m=`Enter how many reps (or seconds) you did, as a whole number.`,E();return}let a=null;if(!r&&(a=Number(d.weight),d.weight===``||!Number.isFinite(a)||a<0||a>1e3)){m=`Enter the weight in pounds. Use 0 if there was no added weight.`,E();return}t.history=lt(t.history,n.exercise.id,e.startedAt,{weight:a,amount:i}),t.session=wt(e,Date.now()),Z(t),B()}function B(e=!0){window.clearInterval(h);let n=t.session;n&&(n.phase===`rest`?(g=X(n,Date.now())<=Kt,C(Wt(n)),h=window.setInterval(V,250)):n.phase===`lift`?e&&C(Ut(n,t.history)):n.phase===`done`&&(U(!1),L(n.day),Z(t),C(`Workout complete. Nice work!`),ke([200,100,200])),E(),window.scrollTo(0,0))}function V(){let n=t.session;if(!n||n.phase!==`rest`){window.clearInterval(h);return}let r=X(n,Date.now()),i=e.querySelector(`[data-timer]`);i&&(i.textContent=oe(r)),!g&&r<=Kt&&r>0&&(g=!0,C(Gt(n))),r===0&&(ke([300]),t.session=Tt(n),Z(t),C(`Go.`),window.setTimeout(()=>B(),u?900:0),window.clearInterval(h))}function H(){window.clearInterval(h),v=null,y=!1,U(!1),t.session=null,a=i(new Date),o=null,Z(t),w(`today`)}function Ae(){let e=t.session,n=e&&Y(e);if(!e||!n||!t.profile)return;M(n.exercise.id,!0);let r=e.exercises.map(e=>e.exercise.id),[i]=T(n,t.profile,t.equipmentIds,r);i?(t.session=Ot(e,i),_=`Switched from ${n.exercise.name} to ${i.exercise.name}, which works the same muscles. ${Jt}`,C(`Switched to ${i.exercise.name}.`)):(t.session=Dt(e),_=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${Jt}`),Z(t),B(!i)}function W(n,r){let i=t.session;if(i){if(n!==`hurt`&&n!==`toggle-voice`&&(_=``),n===`open-swap`){let e=Y(i);if(!e||!t.profile)return;let n=i.exercises.map(e=>e.exercise.id);v=T(e,t.profile,t.equipmentIds,n),E(),window.scrollTo(0,0)}else if(n===`choose-swap`){let e=v?.[Number(r)];if(v=null,!e)return;t.session=Ot(i,e),Z(t),B()}else n===`cancel-swap`?(v=null,E()):n===`hurt`?Ae():n===`set-done`?(t.session=Ct(i),be(),E(),e.querySelector(`input[data-field="amount"]`)?.select()):n===`save-set`?Ee():n===`add-rest`?(t.session=Et(i,qt,Date.now()),g=!1,Z(t),V()):n===`skip-rest`?(t.session=Tt(i),Z(t),B()):n===`skip-exercise`?(t.session=Dt(i),Z(t),B()):n===`play-music`?b.play(i.day):n===`toggle-voice`?(u=!u,u||window.speechSynthesis?.cancel(),E()):n===`end-workout`?(y=!0,E(),window.scrollTo(0,0)):n===`cancel-end`?(y=!1,E()):n===`confirm-end`?(i.exercises.some(e=>Q(t.history,i,e.exercise.id).length>0)&&L(i.day),H()):n===`close-session`&&H()}}e.addEventListener(`change`,e=>{let n=e.target;n.dataset.field===`cal-time`&&ce(n.value)?(t.calendar={...t.calendar,time:n.value},Z(t)):n.dataset.field===`cal-minutes`&&P.includes(Number(n.value))&&(t.calendar={...t.calendar,minutes:Number(n.value)},Z(t))}),e.addEventListener(`click`,c=>{let l=c.target.closest(`[data-point]`);if(l){let e=l.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=l.dataset.point??``);return}let u=c.target.closest(`button`);if(!u)return;let{group:d,value:f,action:p,day:m,date:h,nav:g,step:_,delta:v,exercise:y,index:C,planDay:T,planWorkout:D,workout:O}=u.dataset;if(_&&v){let t=e.querySelector(`input[data-field="${_}"]`);t&&(t.value=String(Math.max(0,(Number(t.value)||0)+Number(v))));return}if(T!==void 0&&D){let e=Number(T),t=D===`rest`?null:D,n=s.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){S(`Keep at least one workout day.`);return}s.weekPlan=n,E();return}if(d&&f){if(d===`goal`&&(s.goal=f),d===`experience`&&(s.experience=f),d===`area`){let e=f,t=s.protectedAreas;s.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}E();return}if(h){a=h,o=null,E();return}if(m){o=m,E();return}if(g){w(g);return}if(p){if(t.session){W(p,C);return}if(r===`fuel`){ge(p,v,C);return}if(p===`save-profile`){let e=t.profile===null;t.profile={...s},e?(Z(t),w(`equipment`)):(w(`today`),x(`Profile saved — your workouts are updated.`))}else if(p===`save-equipment`)t.equipmentIds=[...e.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),t.equipmentConfirmed=!0,w(`today`),x(`Equipment saved.`);else if(p===`avoid`&&y)M(y,!0),E(),x(`${n[y]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(p===`unavoid`&&y)M(y,!1),E(),x(`${n[y]?.name??`That exercise`} is back in your workouts.`);else if(p===`go-equipment`)w(`equipment`);else if(p===`add-to-calendar`)fe();else if(p===`play-music`&&O)b.play(O);else if(p===`do-today`&&O)a=i(new Date),o=O,E(),window.scrollTo(0,0);else if(p===`start-workout`){let{shown:e}=I();if(!e)return;t.session=bt(F(e),new Date),Z(t),U(!0),B()}else if(p===`finish-workout`){let{shown:e}=I();if(!e)return;L(e),w(`today`),x(`Nice work! It's marked done on your calendar.`)}}}),t.session&&(t.session.phase===`rest`&&X(t.session,Date.now())===0&&(t.session=Tt(t.session)),t.session.phase===`log`&&be(),U(t.session.phase!==`done`),t.session.phase===`rest`&&(h=window.setInterval(V,250))),E()}var Xt=document.querySelector(`#app`);Xt&&Yt(Xt),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});